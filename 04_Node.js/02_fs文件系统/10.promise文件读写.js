/* 
    fs/promises API 提供了返回 promise 的异步的文件系统方法。
        - 简单读取 fsp.readFile(path[, options]) 
        - 简单写入 fsp.writeFile(path, data[, options])  
            - path 路径
            - data 要写入的数据
            - options 配置的参数

        返回一个 promise 对象
 */

const fsp = require('fs/promises')

// 简单读取文件
let read = fsp.readFile('hello2.txt', { encoding: 'utf-8' })

read.then(val => {
    // 简单写入文件
    fsp.writeFile('promise.txt', val)
    console.log('写入成功');
}).catch(err => {
    console.error('出错了')
})


// 简单写入文件
function write(content) {
    return fsp.writeFile('index.html', content, { flag: 'a' })
}

async function WritList() {
    await write('<h1>1.今晚吃什么</h1>\n')
    await write('<h1>2.吃饭</h1>\n')
    await write('<h1>3.好的</h1>\n')
}

WritList()