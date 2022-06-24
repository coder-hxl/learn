const path = require('path')

const Koa = require('koa')
const Router = require('@koa/router')
const multer = require('@koa/multer')

const app = new Koa()
const uploadRouter = new Router({ prefix: '/upload' })

const storage = multer.diskStorage({
  destination: './upload',
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({
  // dest: './upload'
  storage
})

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.request.file)
  ctx.response.body = '头像上传成功~'
})

app.use(uploadRouter.routes())

app.listen(8000, () => {
  console.log('文件上传服务器启动成功~')
})
