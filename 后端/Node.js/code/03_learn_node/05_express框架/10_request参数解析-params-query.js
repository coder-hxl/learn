const express = require('express')

const app = express()

// http://localhost:8000/products/1/codebooks
app.get('/products/:id/:name', (req, res, next) => {
  console.log(req.params)
  // req.params => 去数据库查询真实的数据
  res.end('商品详情数据~')
})

// http://localhost:8000/login?username=coderhxl&password=123456
app.get('/login', (req, res, next) => {
  console.log(req.query)
  res.end('登录成功~')
})

app.listen(8000, () => {
  console.log('reuest参数解析-params-query 服务器启动成功~')
})
