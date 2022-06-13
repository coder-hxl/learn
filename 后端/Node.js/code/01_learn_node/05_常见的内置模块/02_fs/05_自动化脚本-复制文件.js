const fs = require('fs')
const path = require('path')

const srcDir = process.argv[2]
const destDir = process.argv[3]
const type = process.argv[4]

function copyFilesSync(srcDir, destDir, log = false) {
  if (fs.existsSync(destDir)) return

  // 创建文件夹, 获取所有文件, 进行拷贝
  fs.mkdirSync(destDir)
  const srcFiles = fs.readdirSync(srcDir, { withFileTypes: true })

  if (log) console.log('开始拷贝任务~')

  srcFiles.forEach((file) => {
    const srcFile = path.resolve(srcDir, file.name)
    let destFile = path.resolve(destDir, file.name)
    if (type === 'all') {
      if (file.isDirectory()) {
        copyFilesSync(srcFile, destFile)
      } else {
        fs.copyFileSync(srcFile, destFile)
      }
    } else if (file.name.endsWith('.' + type)) {
      fs.copyFileSync(srcFile, destFile)
    } else if (file.isDirectory()) {
      copyFilesSync(srcFile, destFile)
    }
  })

  if (log) console.log('拷贝任务结束~')
}

copyFilesSync(srcDir, destDir, true)
