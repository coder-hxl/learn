const express = require('express')
const axios = require('axios')

const app = express()

const middleware1 = (req, res, next) => {
  req.message = 'aaa'
  next()
}

const middleware2 = (req, res, next) => {
  req.message += 'bbb'
  next()
}

const middleware3 = async (req, res, next) => {
  const result = await axios.get('http://localhost:8888')
  console.log(result.data)
  req.message += result.data

  res.end(req.message)
}

app.use(middleware1, middleware2, middleware3)

app.listen(8000, () => {
  console.log('异步数据服务器启动成功~')
})
