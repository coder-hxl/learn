const fs = require('fs')
const path = require('path')

const dirPath = process.argv[2]
const type = process.argv[3]

function removeFilesSync(dirPath, log = false) {
  if (!fs.existsSync(dirPath)) return

  const srcFiles = fs.readdirSync(dirPath, { withFileTypes: true })

  if (log) console.log('开始删除任务~')

  srcFiles.forEach((file) => {
    const filePath = path.resolve(dirPath, file.name)
    if (type === 'all') {
      if (file.isDirectory()) {
        removeFilesSync(filePath)
      } else {
        fs.rmSync(filePath)
      }
    } else if (file.name.endsWith('.' + type)) {
      fs.rmSync(filePath)
    } else if (file.isDirectory()) {
      removeFilesSync(filePath)
    }
  })

  if (log) console.log('删除任务结束~')
}

removeFilesSync(dirPath, true)
