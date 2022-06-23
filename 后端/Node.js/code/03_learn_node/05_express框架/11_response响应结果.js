const express = require('express')

const app = express()

app.get('/home', (req, res, next) => {
  // 设置响应状态码
  res.status(204)

  // 设置响应数据
  // res.type('application/json')
  // res.end(JSON.stringify({ name: 'coderhxl', password: 123456 }))
  res.json({ name: 'coderhxl', password: 123456 })
})

app.listen(8000, () => {
  console.log('普通中间件服务器启动成功~')
})
