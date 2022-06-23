const express = require('express')
const multer = require('multer')

const app = express()
const upload = multer()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/login', upload.any(), (req, res, next) => {
  console.log(req.body)
  res.end('登录成功~')
})

app.listen(8000, () => {
  console.log('form-data解析服务器启动成功~')
})
