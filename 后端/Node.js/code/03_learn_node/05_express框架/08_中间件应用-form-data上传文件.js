const path = require('node:path')

const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './upload/')
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({
  // dest: './upload'
  storage
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/login', upload.any(), (req, res, next) => {
  console.log(req.body)
  res.end('登录成功~')
})

app.post(
  '/upload',
  upload.fields([{ name: 'file', maxCount: 2 }]),
  (req, res, next) => {
    console.log(req.files)
    res.end('文件上传成功~')
  }
)

app.listen(8000, () => {
  console.log('form-data上传文件服务器启动成功~')
})
