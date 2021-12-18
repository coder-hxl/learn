let a = 1
let b = 2
let c = 3

/* 
    exports向外导出
    exports = module.exports
*/

exports.a = a
module.exports.b = b

// exports = c // 这样直接赋值会改变exports指向
module.exports.c = c