/*
    通过npm下载的包都放到node_modules文件夹中
        通过包名直接引用即可

    node在使用模块名字来引入模块，会现在当前目录的node_modules中寻找是否含有改模块
        如果有则直接使用，如果没有则去上级目录的node_modules中寻找
        直到找到磁盘的根目录为止，如果依旧没有，则报错
*/

let math = require("math")

console.log(math.add(123,456));