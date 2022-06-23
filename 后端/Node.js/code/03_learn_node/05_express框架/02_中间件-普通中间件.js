const express = require('express')

const app = express()

// 普通中间件
// use 注册中间件(回调函数)
app.use((req, res, next) => {
  console.log('注册了第01个普通中间件')
  next()
})

app.use((req, res, next) => {
  console.log('注册了第02个普通中间件')
  next()
})

app.use((req, res, next) => {
  console.log('注册了第03个普通中间件')
  res.end('Hello Middleware')
})

app.listen(8000, () => {
  console.log('普通中间件服务器启动成功~')
})
