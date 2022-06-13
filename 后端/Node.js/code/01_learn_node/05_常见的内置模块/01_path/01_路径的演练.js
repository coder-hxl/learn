const path = require('path')

const basepath = '/User/hxl'
const filename = 'index.js'

// 转换为该操作系统所识别的斜杠
const filepath = path.resolve(basepath, filename)

console.log(filepath)
