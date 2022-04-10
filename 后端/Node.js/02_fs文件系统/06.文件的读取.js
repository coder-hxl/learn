/* 
    1.同步文件读取
    2.异步文件读取
    3.简单文件读取
        fs.readFile(path[, options], callback)
        fs.readFileSync(path[, options])
            - path 读取的路径的文件
            - options 配置的参数
            - callback 回调函数，通过回调函数将读取的内容返回
                err 错误对象
                data 读取到的数据，会返回一个Buffer
                
    4.流式文件读取
 */

let fs = require('fs')

let path = 'E:/前端/1. 练习/08-Node.js/尚硅谷/02.文件系统/a.mp3'

fs.readFile('a1.jpg', (err,data)=>{
    if(!err){
        // console.log(data);
        // 将data写入到文件中
        fs.writeFile('hello.jpg', data, (err)=>{
            if(!err){
                console.log('写入成功');
            }
        })
    }
})