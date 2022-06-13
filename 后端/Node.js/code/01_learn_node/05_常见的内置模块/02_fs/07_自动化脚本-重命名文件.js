const fs = require('fs')
const path = require('path')

const dirPath = process.argv[2]
const type = process.argv[3]

function renameFilesSync(dirPath, log = false) {
  let i = 0

  const srcFiles = fs.readdirSync(dirPath, { withFileTypes: true })

  if (log) console.log('开始重命名任务~')

  srcFiles.forEach((file) => {
    const oldPath = path.resolve(dirPath, file.name)
    if (file.name.endsWith('.' + type)) {
      const name = `${++i}`.padStart(2, '0')
      const newPath = path.resolve(dirPath, name + '.' + type)
      fs.renameSync(oldPath, newPath)
    } else if (file.isDirectory()) {
      renameFilesSync(oldPath)
    }
  })

  if (log) console.log('重命名任务结束~')
}

renameFilesSync(dirPath, true)
