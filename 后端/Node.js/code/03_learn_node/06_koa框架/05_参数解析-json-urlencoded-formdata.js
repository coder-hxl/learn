const Koa = require('koa')
const koaBody = require('koa-body')
const multer = require('@koa/multer')

const app = new Koa()

const upload = multer()

app.use(koaBody())
app.use(upload.any())

app.use((ctx, next) => {
  console.log(ctx.request.body)
  ctx.response.body = '哈哈哈~'
})

app.listen(8000, () => {
  console.log('参数解析服务器启动成功~')
})
