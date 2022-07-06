const Koa = require('koa')
const Router = require('@koa/router')

const testRouter = new Router()

testRouter.get('/test', (ctx, next) => {
  // maxAge: 毫秒
  ctx.cookies.set('name', 'hxl', {
    maxAge: 10000
  })

  ctx.body = 'test'
})

testRouter.get('/demo', (ctx, next) => {
  // 读取cookie
  const value = ctx.cookies.get('name')

  ctx.body = '您的cookie是: ' + value
})

const app = new Koa()

app.use(testRouter.routes())

app.listen(8080, () => {
  console.log('服务器启动成功~')
})
