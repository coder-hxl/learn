/* 
    流式文件读取也适用一些比较大的文件，可以分多次将文件读取到内存中
 */

let fs = require('fs')

// 创建一个可读流
let rs = fs.createReadStream('a.mp3')
// 创建一个可写流
let ws = fs.createWriteStream('b.mp3')

// 监听流的开启和关闭
rs.once('open',function(){
    console.log('可读流打开了');
})
rs.once('close',function(){
    console.log('可读流关闭了');
    // 读取完数据，关闭可写流
    ws.end()
})

ws.once('open',function(){
    console.log('可写流打开了');
})
ws.once('close',function(){
    console.log('可写流关闭了');
})

rs.on('data',function(data){
    // console.log(data.length);
    // 将读取到的数据写到可写流中
    ws.write(data)
})