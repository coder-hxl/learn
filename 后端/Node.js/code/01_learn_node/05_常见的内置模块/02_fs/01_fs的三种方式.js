const fs = require('fs')

const filepath = './abc.txt'

// 1.同步
// const info = fs.statSync(filepath)
// console.log('后续需要执行的代码')
// console.log(info)

// 2.异步 回调
// fs.stat(filepath, (err, stat) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(stat)
//   }
// })
// console.log('后续需要执行的代码')

// 3.异步 promise
fs.promises
  .stat(filepath)
  .then((res) => {
    console.log(res)
    console.log(res.isFile())
    console.log(res.isDirectory())
  })
  .catch((err) => {
    console.log(err)
  })

console.log('后续需要执行的代码')
