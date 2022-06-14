const util = require('util')
const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')

const download = util.promisify(require('download-git-repo'))

async function createProjectActive(project, others) {
  console.log('构建中~')
  // 1.clone项目
  await download(vueRepo, project, { clone: true })
  // 2.执行npm install
  await commandSpawn('npm', ['install'], { cwd: `./${project}` })

  // 3.运行npm run serve

  // 4.打开浏览器
}

module.exports = {
  createProjectActive
}
