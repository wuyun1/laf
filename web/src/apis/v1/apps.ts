// @ts-ignore
/* eslint-disable */
///////////////////////////////////////////////////////////////////////
//                                                                   //
// this file is autogenerated by service-generate                    //
// do not edit this file manually                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
/// <reference path = "api-auto.d.ts" />
import request from "@/utils/request";

/**
 * Create a new function
 */
export async function FunctionControllerCreate(
  params: Definitions.CreateFunctionDto | any,
): Promise<Paths.FunctionControllerCreate.Responses> {
  // /v1/apps/{appid}/functions
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions`, {
    method: "POST",
    data: params,
  });
}

/**
 * Query function list of an app
 */
export async function FunctionControllerFindAll(
  params: Paths.FunctionControllerFindAll.BodyParameters | any,
): Promise<Paths.FunctionControllerFindAll.Responses> {
  // /v1/apps/{appid}/functions
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get a function by its name
 */
export async function FunctionControllerFindOne(
  params: Paths.FunctionControllerFindOne.BodyParameters | any,
): Promise<Paths.FunctionControllerFindOne.Responses> {
  // /v1/apps/{appid}/functions/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update a function
 */
export async function FunctionControllerUpdate(
  params: Definitions.UpdateFunctionDto | any,
): Promise<Paths.FunctionControllerUpdate.Responses> {
  // /v1/apps/{appid}/functions/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a function
 */
export async function FunctionControllerRemove(
  params: Paths.FunctionControllerRemove.BodyParameters | any,
): Promise<Paths.FunctionControllerRemove.Responses> {
  // /v1/apps/{appid}/functions/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Compile a function
 */
export async function FunctionControllerCompile(
  params: Definitions.CompileFunctionDto | any,
): Promise<Paths.FunctionControllerCompile.Responses> {
  // /v1/apps/{appid}/functions/{name}/compile
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}/compile`, {
    method: "POST",
    data: params,
  });
}

/**
 * Set a environment variable (create/update)
 */
export async function EnvironmentVariableControllerAdd(
  params: Definitions.CreateEnvironmentDto | any,
): Promise<Paths.EnvironmentVariableControllerAdd.Responses> {
  // /v1/apps/{appid}/environments
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/environments`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get environment variables
 */
export async function EnvironmentVariableControllerGet(
  params: Paths.EnvironmentVariableControllerGet.BodyParameters | any,
): Promise<Paths.EnvironmentVariableControllerGet.Responses> {
  // /v1/apps/{appid}/environments
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/environments`, {
    method: "GET",
    params: params,
  });
}

/**
 * Delete an environment variable by name
 */
export async function EnvironmentVariableControllerDelete(
  params: Paths.EnvironmentVariableControllerDelete.BodyParameters | any,
): Promise<Paths.EnvironmentVariableControllerDelete.Responses> {
  // /v1/apps/{appid}/environments/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/environments/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Create a new bucket
 */
export async function BucketControllerCreate(
  params: Definitions.CreateBucketDto | any,
): Promise<Paths.BucketControllerCreate.Responses> {
  // /v1/apps/{appid}/buckets
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get bucket list of an app
 */
export async function BucketControllerFindAll(
  params: Paths.BucketControllerFindAll.BodyParameters | any,
): Promise<Paths.BucketControllerFindAll.Responses> {
  // /v1/apps/{appid}/buckets
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get a bucket by name
 */
export async function BucketControllerFindOne(
  params: Paths.BucketControllerFindOne.BodyParameters | any,
): Promise<Paths.BucketControllerFindOne.Responses> {
  // /v1/apps/{appid}/buckets/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets/${_params.name}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update a bucket
 */
export async function BucketControllerUpdate(
  params: Definitions.UpdateBucketDto | any,
): Promise<Paths.BucketControllerUpdate.Responses> {
  // /v1/apps/{appid}/buckets/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a bucket
 */
export async function BucketControllerRemove(
  params: Paths.BucketControllerRemove.BodyParameters | any,
): Promise<Paths.BucketControllerRemove.Responses> {
  // /v1/apps/{appid}/buckets/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Create a new collection in database
 */
export async function CollectionControllerCreate(
  params: Definitions.CreateCollectionDto | any,
): Promise<Paths.CollectionControllerCreate.Responses> {
  // /v1/apps/{appid}/collections
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get collection list of an application
 */
export async function CollectionControllerFindAll(
  params: Paths.CollectionControllerFindAll.BodyParameters | any,
): Promise<Paths.CollectionControllerFindAll.Responses> {
  // /v1/apps/{appid}/collections
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get collection by name
 */
export async function CollectionControllerFindOne(
  params: Paths.CollectionControllerFindOne.BodyParameters | any,
): Promise<Paths.CollectionControllerFindOne.Responses> {
  // /v1/apps/{appid}/collections/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections/${_params.name}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update a collection
 */
export async function CollectionControllerUpdate(
  params: Definitions.UpdateCollectionDto | any,
): Promise<Paths.CollectionControllerUpdate.Responses> {
  // /v1/apps/{appid}/collections/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a collection by its name
 */
export async function CollectionControllerRemove(
  params: Paths.CollectionControllerRemove.BodyParameters | any,
): Promise<Paths.CollectionControllerRemove.Responses> {
  // /v1/apps/{appid}/collections/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Create database policy
 */
export async function PolicyControllerCreate(
  params: Definitions.CreatePolicyDto | any,
): Promise<Paths.PolicyControllerCreate.Responses> {
  // /v1/apps/{appid}/policies
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get database policy list
 */
export async function PolicyControllerFindAll(
  params: Paths.PolicyControllerFindAll.BodyParameters | any,
): Promise<Paths.PolicyControllerFindAll.Responses> {
  // /v1/apps/{appid}/policies
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update database policy
 */
export async function PolicyControllerUpdate(
  params: Definitions.UpdatePolicyDto | any,
): Promise<Paths.PolicyControllerUpdate.Responses> {
  // /v1/apps/{appid}/policies/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Remove a database policy
 */
export async function PolicyControllerRemove(
  params: Paths.PolicyControllerRemove.BodyParameters | any,
): Promise<Paths.PolicyControllerRemove.Responses> {
  // /v1/apps/{appid}/policies/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * The database proxy for database management
 */
export async function DatabaseControllerProxy(
  params: Paths.DatabaseControllerProxy.BodyParameters | any,
): Promise<Paths.DatabaseControllerProxy.Responses> {
  // /v1/apps/{appid}/databases/proxy
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/databases/proxy`, {
    method: "POST",
    data: params,
  });
}

/**
 * Create database policy rule
 */
export async function PolicyRuleControllerCreate(
  params: Definitions.CreatePolicyRuleDto | any,
): Promise<Paths.PolicyRuleControllerCreate.Responses> {
  // /v1/apps/{appid}/policies/{name}/rules
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}/rules`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get database policy rules
 */
export async function PolicyRuleControllerFindAll(
  params: Paths.PolicyRuleControllerFindAll.BodyParameters | any,
): Promise<Paths.PolicyRuleControllerFindAll.Responses> {
  // /v1/apps/{appid}/policies/{name}/rules
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}/rules`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update database policy rule by collection name
 */
export async function PolicyRuleControllerUpdate(
  params: Definitions.UpdatePolicyRuleDto | any,
): Promise<Paths.PolicyRuleControllerUpdate.Responses> {
  // /v1/apps/{appid}/policies/{name}/rules/{collection}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}/rules/${_params.collection}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Remove a database policy rule by collection name
 */
export async function PolicyRuleControllerRemove(
  params: Paths.PolicyRuleControllerRemove.BodyParameters | any,
): Promise<Paths.PolicyRuleControllerRemove.Responses> {
  // /v1/apps/{appid}/policies/{name}/rules/{collection}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}/rules/${_params.collection}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerCreate(
  params: Definitions.CreateWebsiteDto | any,
): Promise<Paths.WebsitesControllerCreate.Responses> {
  // /v1/apps/{appid}/websites
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites`, {
    method: "POST",
    data: params,
  });
}

/**
 * TODO - ⌛️
 *
 */
export async function WebsitesControllerFindAll(
  params: Paths.WebsitesControllerFindAll.BodyParameters | any,
): Promise<Paths.WebsitesControllerFindAll.Responses> {
  // /v1/apps/{appid}/websites
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites`, {
    method: "GET",
    params: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerFindOne(
  params: Paths.WebsitesControllerFindOne.BodyParameters | any,
): Promise<Paths.WebsitesControllerFindOne.Responses> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}`, {
    method: "GET",
    params: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerUpdate(
  params: Definitions.UpdateWebsiteDto | any,
): Promise<Paths.WebsitesControllerUpdate.Responses> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}`, {
    method: "PATCH",
    data: params,
  });
}

export async function WebsitesControllerResolved(
  params: Definitions.UpdateWebsiteDto | any,
): Promise<Paths.WebsitesControllerUpdate.Responses> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}/resolved`, {
    method: "POST",
    data: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerRemove(
  params: Paths.WebsitesControllerRemove.BodyParameters | any,
): Promise<Paths.WebsitesControllerRemove.Responses> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Get function logs
 */
export async function LogControllerGetLogs(
  params: Paths.LogControllerGetLogs.BodyParameters | any,
): Promise<Paths.LogControllerGetLogs.Responses> {
  // /v1/apps/{appid}/logs/functions
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/logs/functions`, {
    method: "GET",
    params: params,
  });
}

/**
 * Add application dependencies
 */
export async function DependencyControllerAdd(
  params: Paths.DependencyControllerAdd.BodyParameters | any,
): Promise<Paths.DependencyControllerAdd.Responses> {
  // /v1/apps/{appid}/dependencies
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/dependencies`, {
    method: "POST",
    data: params,
  });
}

/**
 * Update application dependencies
 */
export async function DependencyControllerUpdate(
  params: Paths.DependencyControllerUpdate.BodyParameters | any,
): Promise<Paths.DependencyControllerUpdate.Responses> {
  // /v1/apps/{appid}/dependencies
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/dependencies`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Get application dependencies
 */
export async function DependencyControllerGetDependencies(
  params: Paths.DependencyControllerGetDependencies.BodyParameters | any,
): Promise<Paths.DependencyControllerGetDependencies.Responses> {
  // /v1/apps/{appid}/dependencies
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/dependencies`, {
    method: "GET",
    params: params,
  });
}

/**
 * Remove a dependency
 */
export async function DependencyControllerRemove(
  params: Paths.DependencyControllerRemove.BodyParameters | any,
): Promise<Paths.DependencyControllerRemove.Responses> {
  // /v1/apps/{appid}/dependencies/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/dependencies`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Create a cron trigger
 */
export async function TriggerControllerCreate(
  params: Definitions.CreateTriggerDto | any,
): Promise<Paths.TriggerControllerCreate.Responses> {
  // /v1/apps/{appid}/triggers
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/triggers`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get trigger list of an application
 */
export async function TriggerControllerFindAll(
  params: Paths.TriggerControllerFindAll.BodyParameters | any,
): Promise<Paths.TriggerControllerFindAll.Responses> {
  // /v1/apps/{appid}/triggers
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/triggers`, {
    method: "GET",
    params: params,
  });
}

/**
 * Remove a cron trigger
 */
export async function TriggerControllerRemove(
  params: Paths.TriggerControllerRemove.BodyParameters | any,
): Promise<Paths.TriggerControllerRemove.Responses> {
  // /v1/apps/{appid}/triggers/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/triggers/${_params.id}`, {
    method: "DELETE",
    data: params,
  });
}
