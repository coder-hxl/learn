const fs = require('fs')

const content = '哈哈哈'

// 写
fs.writeFile('./abc.txt', content, { flag: 'a' }, (err) => {
  console.log(err)
})

// 读
fs.readFile('./abc.txt', { encoding: 'utf-8' }, (err, data) => {
  console.log(data)
})
