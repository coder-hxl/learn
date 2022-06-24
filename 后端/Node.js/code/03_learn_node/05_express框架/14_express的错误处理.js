const express = require('express')

const USERNAME_DOES_NOT_EXISTS = 'USERNAME_DOES_NOT_EXISTS'
const USERNAME_ALREADY_EXISTS = 'USERNAME_ALREADY_EXISTS'

const app = express()

app.post('/login', (req, res, next) => {
  const isLogin = false

  if (isLogin) {
    res.json('登录成功~')
  } else {
    // res.status(400)
    // res.json(USERNAME_DOES_NOT_EXISTS)
    next(new Error(USERNAME_DOES_NOT_EXISTS))
  }
})

app.post('/register', (req, res, next) => {
  const isRegister = false

  if (isRegister) {
    res.json('注册成功~')
  } else {
    // res.status(400)
    // res.json(USERNAME_ALREADY_EXISTS)
    next(new Error(USERNAME_ALREADY_EXISTS))
  }
})

app.use((err, req, res, next) => {
  let status = 400
  let message = ''

  switch (err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      message = 'USERNAME_DOES_NOT_EXISTS~'
      break
    case USERNAME_ALREADY_EXISTS:
      message = 'USERNAME_ALREADY_EXISTS~'
      break
    default:
      message = 'NOT FOUND~'
  }

  res.status(status)
  res.json(message)
})

app.listen(8000, () => {
  console.log('express的错误处理 服务器启动成功~')
})
