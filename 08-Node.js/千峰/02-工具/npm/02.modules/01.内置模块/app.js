const path = require('path')

/* 
    path 是node的内置模块，提供了用于处理文件和目录的路径的实用工具。
        path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
*/

console.log(path.resolve(__dirname, '../'));    // __dirname 是当前文件所在的绝对路径 