const express = require('express')

// 创建服务器
const app = express()

// 监听默认路径
app.get('/', (req, res, next) => {
  res.end('Hello Express~')
})

app.post('/', (req, res, next) => {
  res.end('Hello Express POST~')
})

// 监听 /login 路径
app.post('/login', (req, res, next) => {
  res.end('Welcome Back~')
})

// 启动服务
app.listen(8000, () => {
  console.log('express 服务器启动成功~')
})
