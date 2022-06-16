const util = require('util')
const path = require('path')

const download = util.promisify(require('download-git-repo'))
const open = require('open')

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile, writeToFile, createDirSync } = require('../utils/utils')

const createProjectActive = async (project, others) => {
  console.log('help you create you project~')
  // 1.clone项目
  await download(vueRepo, project, { clone: true })

  // 2.执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3.运行npm run serve
  commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })

  // 4.打开浏览器
  open('http://localhost:8080/')
}

const addComponentAction = async (name, dest) => {
  // 1.编译ejs文件
  const result = await compile('vue-component.ejs', {
    name,
    lowerName: name.toLocaleLowerCase()
  })

  // 2.写入文件的操作
  if (createDirSync(dest)) {
    const targetPath = path.resolve(dest, `${name}.vue`)
    console.log(targetPath)
    writeToFile(targetPath, result)
  }
}

const addPageAndRouteAction = async (name, dest) => {
  const componentResult = await compile('vue-component.ejs', {
    name,
    lowerName: name.toLocaleLowerCase()
  })
  const routeResult = await compile('vue-route.ejs', {
    name,
    lowerName: name.toLocaleLowerCase()
  })

  const targetDest = path.resolve(dest, name)
  if (createDirSync(targetDest)) {
    const componentPath = path.resolve(targetDest, `${name}.vue`)
    const routePath = path.resolve(targetDest, 'route.js')
    writeToFile(componentPath, componentResult)
    writeToFile(routePath, routeResult)
  }
}

module.exports = {
  createProjectActive,
  addComponentAction,
  addPageAndRouteAction
}
