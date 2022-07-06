const Koa = require('koa')
const Router = require('@koa/router')
const Session = require('koa-session')

const testRouter = new Router()
testRouter.get('/test', (ctx, next) => {
  ctx.session.user = { id: 1, name: 'hxl' }

  ctx.body = 'test'
})

testRouter.get('/demo', (ctx, next) => {
  console.log(ctx.session.user)

  ctx.body = 'demo'
})

const app = new Koa()

// 创建 session 的配置
const session = Session(
  {
    key: 'sessionid',
    maxAge: 10 * 1000,
    signed: true // 是否使用加密签名
  },
  app
)
app.keys = ['aaa']

app.use(session)
app.use(testRouter.routes())

app.listen(8080, () => {
  console.log('服务器启动成功~')
})
