const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('Common Middleware 01')
  next()
})

// 路径中间件
app.use('/home', (req, res, next) => {
  console.log('Home Middleware 01')
  next()
})

// 普通中间件
app.use((req, res, next) => {
  console.log('Common Middleware 02')
  next()
})

app.use('/home', (req, res, next) => {
  console.log('Home Middleware 02')
  res.end('Home Middleware')
})

app.listen(8000, () => {
  console.log('路径中间件服务器启动成功~')
})
