const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('common middleware')
  next()
})

// 路径和方法都匹配的中间件
app.get('/home', (req, res, next) => {
  console.log('home path and method middleware')
})

app.post('/login', (req, res, next) => {
  console.log('login path and method middleware')
})

app.listen(8000, () => {
  console.log('路径和方法中间件启动成功~')
})
