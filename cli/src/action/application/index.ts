import { applicationControllerFindAll, applicationControllerFindOne } from '../../api/v1/application'
import * as Table from 'cli-table3'
import { ApplicationConfig, existApplicationConfig, writeApplicationConfig } from '../../config/application'
import * as path from 'node:path'
import * as fs from 'node:fs'

import {
  FUNCTIONS_DIRECTORY_NAME,
  GITIGNORE_FILE,
  GLOBAL_FILE,
  PACKAGE_FILE,
  RESPONSE_FILE,
  TEMPLATE_DIR,
  TSCONFIG_FILE,
  TYPE_DIR,
} from '../../common/constant'
import { ensureDirectory, exist } from '../../util/file'

import { refreshSecretConfig } from '../../config/secret'
import { getEmoji } from '../../util/print'

export async function list() {
  const table = new Table({
    head: ['appid', 'name', 'region', 'bundle', 'runtime', 'phase'],
  })
  const data = await applicationControllerFindAll()
  for (let item of data) {
    table.push([item.appid, item.name, item.regionName, item.bundleName, item.runtimeName, item.phase])
  }
  console.log(table.toString())
}

export async function init(appid: string, options: { sync: boolean }) {
  if (existApplicationConfig()) {
    console.log(
      `${getEmoji(
        '❌',
      )} The laf.yaml file already exists in the current directory. Please change the directory or delete the laf.yaml file`,
    )
    return
  }

  const data = await applicationControllerFindOne(appid)

  const config: ApplicationConfig = {
    name: data.name,
    appid: data.appid,
    regionName: data.regionName,
    bundleName: data.bundleName,
    runtimeName: data.runtimeName,
    createdAt: data.createdAt,
  }
  // generate application invoke address
  config.invokeUrl = 'http://' + data.domain.domain

  writeApplicationConfig(config)

  // init function
  initFunction()

  // init policy
  initPolicy()

  // init secret
  refreshSecretConfig()

  if (options.sync) {
    // TODO: sync
  }
  console.log(`${getEmoji('🚀')} application ${data.name} init success`)
}

function initFunction() {
  // if not exist，create functions directory
  ensureDirectory(path.join(process.cwd(), FUNCTIONS_DIRECTORY_NAME))

  const typeDir = path.resolve(process.cwd(), TYPE_DIR)
  ensureDirectory(typeDir)

  // from template dir
  const templateDir = path.resolve(__dirname, '../../../', TEMPLATE_DIR)

  // generate global.d.ts
  const fromGlobalFile = path.resolve(templateDir, GLOBAL_FILE)
  const outGlobalFile = path.resolve(typeDir, GLOBAL_FILE)
  fs.writeFileSync(outGlobalFile, fs.readFileSync(fromGlobalFile, 'utf-8'))

  // generate response.d.ts
  const fromResponseFile = path.resolve(templateDir, RESPONSE_FILE)
  const outResponseFile = path.resolve(TYPE_DIR, RESPONSE_FILE)
  fs.writeFileSync(outResponseFile, fs.readFileSync(fromResponseFile, 'utf-8'))

  // generate package.json
  const fromPackageFile = path.resolve(templateDir, PACKAGE_FILE)
  const outPackageFile = path.resolve(process.cwd(), PACKAGE_FILE)
  fs.writeFileSync(outPackageFile, fs.readFileSync(fromPackageFile, 'utf-8'))

  // generate tsconfig.json
  const fromTsConfigFile = path.resolve(templateDir, TSCONFIG_FILE)
  const outTsConfigFile = path.resolve(process.cwd(), TSCONFIG_FILE)
  fs.writeFileSync(outTsConfigFile, fs.readFileSync(fromTsConfigFile, 'utf-8'))

  // generate .gitignore
  const fromGitIgnoreFile = path.resolve(templateDir, GITIGNORE_FILE)
  const outGitIgnoreFile = path.resolve(process.cwd(), GITIGNORE_FILE)
  if (!exist(outGitIgnoreFile)) {
    fs.writeFileSync(outGitIgnoreFile, fs.readFileSync(fromGitIgnoreFile, 'utf-8'))
  }
}

function initPolicy() {
  ensureDirectory(path.join(process.cwd(), 'policies'))
}
