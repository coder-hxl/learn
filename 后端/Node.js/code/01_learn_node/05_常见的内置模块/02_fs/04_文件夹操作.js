const fs = require('fs')
const path = require('path')

const dirpath = './hxl'

// 1.创建文件夹
if (!fs.existsSync(dirpath)) {
  fs.mkdir(dirpath, (err) => {
    console.log(err)
  })
}

// 2.读取文件夹的内容
// fs.readdir(dirpath, (err, files) => {
//   console.log(files)
// })

// 递归获取文件夹内所有的文件名
// function getFiles(dirpath) {
//   fs.readdir(dirpath, { withFileTypes: true }, (err, files) => {
//     files.forEach((file) => {
//       if (file.isDirectory()) {
//         const filepath = path.resolve(dirpath, file.name)
//         getFiles(filepath)
//       } else {
//         console.log(file.name)
//       }
//     })
//   })
// }

// getFiles(dirpath)

// 3.文件重命名
fs.rename('./hxl', './coderhxl', (err) => {
  console.log(err)
})
