// 1. 引入 fs 模块
const fs = require('fs')

// 2. 调用方法读取文件
// fs.readFile('./resources/为学.md', (err, data) => {
//     // 失败则抛出错误
//     if (err) throw err

//     // 没出错就输出内容
//     console.log(data.toString());
// })

// 3. 使用 Promise 封装
const p = new Promise(function(resolve, reject) {
    fs.readFile('./resources/为学.md', (err, data) => {
        // 失败
        if (err) reject(err)

        // 成功
        resolve(data)
    })
})

p.then(function(value) {
    console.log(value.toString());
}, function(reason) {
    console.log('读取失败！！！');
})