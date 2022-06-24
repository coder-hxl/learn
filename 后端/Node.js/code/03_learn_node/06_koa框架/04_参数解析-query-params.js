const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const usersRouter = new Router({ prefix: '/users' })

usersRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.query)
  console.log(ctx.request.params)
  ctx.response.body = 'Hello'
})

// app.use((ctx, next) => {
//   console.log(ctx.request.query)
//   console.log(ctx.request.params)
//   ctx.response.body = 'Hello'
// })

app.use(usersRouter.routes())

app.listen(8000, () => {
  console.log('参数解析服务器启动成功~')
})
