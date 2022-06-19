const fs = require('fs')

// fs.readFile('./foo.txt', (err, data) => {
//   fs.writeFile('./bar.txt', data, (err) => {
//     console.log(err)
//   })
// })

const reader = fs.createReadStream('./foo.txt')
const writer = fs.createWriteStream('./baz.txt')

reader.pipe(writer)

reader.on('close', () => {
  console.log('关闭阅读流文件~')
  writer.end()
})

writer.on('close', () => {
  console.log('关闭写入文件~')
})
