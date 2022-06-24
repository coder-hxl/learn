const Koa = require('koa')

const usersRouter = require('./routers/user')

const app = new Koa()

app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(8000, () => {
  console.log('路由的使用服务器启动成功~')
})
