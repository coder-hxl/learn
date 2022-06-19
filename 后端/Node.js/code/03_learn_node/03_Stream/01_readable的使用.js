const fs = require('fs')

// 传统的写入方式
// fs.readFile('./foo.txt', (err, data) => {
//   console.log(data)
// })

// 流的读取方式
const reader = fs.createReadStream('./foo.txt', {
  start: 3,
  end: 10,
  highWaterMark: 2
})

// 流的读取过程
reader.on('data', (data) => {
  console.log(data)

  reader.pause()

  setTimeout(() => {
    reader.reader()
  }, 1000)
})

reader.on('ready', () => {
  console.log('开始读取~')
})

reader.on('close', () => {
  console.log('关闭读取~')
})
