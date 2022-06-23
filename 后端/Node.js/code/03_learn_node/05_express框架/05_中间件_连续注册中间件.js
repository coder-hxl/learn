const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('common middleware')
  next()
})

app.get(
  '/home',
  (req, res, next) => {
    console.log('home path and method middleware 01')
    next()
  },
  (req, res, next) => {
    console.log('home path and method middleware 02')
    next()
  },
  (req, res, next) => {
    console.log('home path and method middleware 03')
    res.end('home page')
  }
)

app.listen(8000, () => {
  console.log('连续注册中间件服务器启动成功~')
})
