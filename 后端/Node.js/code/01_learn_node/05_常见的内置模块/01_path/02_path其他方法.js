const path = require('path')

// 1.获取路径信息
// const filename = '/User/hxl/index.js'

// console.log(path.dirname(filename))
// console.log(path.basename(filename))
// console.log(path.extname(filename))

// 2.join路径拼接
const basepath = '/User/hxl'
const filename = 'index.js'
const orthername = '/code'

console.log(path.join(basepath, filename))

// 3.resolve路径拼接
// resolve方法会判断字符串是否以/或./或../开头的路径
console.log(path.resolve(basepath, filename, orthername))
