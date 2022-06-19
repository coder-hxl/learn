const fs = require('fs')

// 传统写入方式
// fs.writeFile('./foz.txt', 'Hello World', { flag: 'a+' }, (err) => {
//   console.log(err)
// })

// stream写入方式
const writer = fs.createWriteStream('./foz.txt', {
  flags: 'r+',
  start: 2
})

writer.write('你好啊', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('写入成功~')
})

writer.write('哈哈哈', (err) => {})

// writer.close()
writer.end('666')

writer.on('close', () => {
  console.log('关闭文件~')
})
