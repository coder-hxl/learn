const message = '你好啊'

// 1.默认使用 utf-8 方式编码和解码
// const buffer = Buffer.from(message)
// console.log(buffer)
// console.log(buffer.toString())

// 2.不同编码, 解码会乱
const buffer = Buffer.from(message, 'utf16le')
console.log(buffer)
console.log(buffer.toString())
