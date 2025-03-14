import { Injectable, Logger } from '@nestjs/common'
import { KubernetesObject } from '@kubernetes/client-node'
import * as k8s from '@kubernetes/client-node'
import { Region } from '@prisma/client'
import { GetApplicationNamespaceByAppId } from 'src/utils/getter'
import { compare } from 'fast-json-patch'
import { GroupVersionKind } from 'src/region/cluster/types'
import {
  LABEL_KEY_APP_ID,
  LABEL_KEY_NAMESPACE_TYPE,
  LABEL_KEY_USER_ID,
} from 'src/constants'

@Injectable()
export class ClusterService {
  private readonly logger = new Logger(ClusterService.name)

  /**
   * Load kubeconfig of region:
   * - if region kubeconfig is empty, load from default config (in-cluster service account or ~/.kube/config)
   * - if region kubeconfig is not empty, load from string
   */
  loadKubeConfig(region: Region) {
    const conf = region.clusterConf.kubeconfig
    const kc = new k8s.KubeConfig()

    // if conf is empty load from default config (in-cluster service account or ~/.kube/config)
    if (!conf) {
      kc.loadFromDefault()
      return kc
    }

    // if conf is not empty load from string
    kc.loadFromString(conf)
    return kc
  }

  // create app namespace
  async createAppNamespace(region: Region, appid: string, userid: string) {
    try {
      const namespace = new k8s.V1Namespace()
      namespace.metadata = new k8s.V1ObjectMeta()
      namespace.metadata.name = GetApplicationNamespaceByAppId(appid)
      namespace.metadata.labels = {
        [LABEL_KEY_APP_ID]: appid,
        [LABEL_KEY_NAMESPACE_TYPE]: 'app',
        [LABEL_KEY_USER_ID]: userid,
      }
      const coreV1Api = this.makeCoreV1Api(region)

      const res = await coreV1Api.createNamespace(namespace)
      return res.body
    } catch (err) {
      this.logger.error(err)
      this.logger.debug(err?.response?.body)
      return null
    }
  }

  // get app namespace
  async getAppNamespace(region: Region, appid: string) {
    try {
      const coreV1Api = this.makeCoreV1Api(region)
      const namespace = GetApplicationNamespaceByAppId(appid)
      const res = await coreV1Api.readNamespace(namespace)
      return res.body
    } catch (err) {
      if (err?.response?.body?.reason === 'NotFound') return null
      this.logger.error(err)
      this.logger.debug(err?.response?.body)
      return null
    }
  }

  // remove app namespace
  async removeAppNamespace(region: Region, appid: string) {
    try {
      const coreV1Api = this.makeCoreV1Api(region)
      const namespace = GetApplicationNamespaceByAppId(appid)
      const res = await coreV1Api.deleteNamespace(namespace)
      return res
    } catch (err) {
      this.logger.error(err)
      this.logger.debug(err?.response?.body)
      return null
    }
  }

  async patchCustomObject(region: Region, spec: KubernetesObject) {
    const client = this.makeCustomObjectApi(region)
    const gvk = GroupVersionKind.fromKubernetesObject(spec)

    // get the current spec
    const res = await client.getNamespacedCustomObject(
      gvk.group,
      gvk.version,
      spec.metadata.namespace,
      gvk.plural,
      spec.metadata.name,
    )
    const currentSpec = res.body as KubernetesObject

    // calculate the patch
    const patch = compare(currentSpec, spec)
    const options = {
      headers: {
        'Content-Type': k8s.PatchUtils.PATCH_FORMAT_JSON_PATCH,
      },
    }

    // apply the patch
    const response = await client.patchNamespacedCustomObject(
      gvk.group,
      gvk.version,
      spec.metadata.namespace,
      gvk.plural,
      spec.metadata.name,
      patch,
      undefined,
      undefined,
      undefined,
      options,
    )

    return response.body
  }

  async deleteCustomObject(region: Region, spec: KubernetesObject) {
    const client = this.makeCustomObjectApi(region)
    const gvk = GroupVersionKind.fromKubernetesObject(spec)

    const response = await client.deleteNamespacedCustomObject(
      gvk.group,
      gvk.version,
      spec.metadata.namespace,
      gvk.plural,
      spec.metadata.name,
    )

    return response.body
  }

  makeCoreV1Api(region: Region) {
    const kc = this.loadKubeConfig(region)
    return kc.makeApiClient(k8s.CoreV1Api)
  }

  makeAppsV1Api(region: Region) {
    const kc = this.loadKubeConfig(region)
    return kc.makeApiClient(k8s.AppsV1Api)
  }

  makeBatchV1Api(region: Region) {
    const kc = this.loadKubeConfig(region)
    return kc.makeApiClient(k8s.BatchV1Api)
  }

  makeObjectApi(region: Region) {
    const kc = this.loadKubeConfig(region)
    return kc.makeApiClient(k8s.KubernetesObjectApi)
  }

  makeCustomObjectApi(region: Region) {
    const kc = this.loadKubeConfig(region)
    return kc.makeApiClient(k8s.CustomObjectsApi)
  }
}
