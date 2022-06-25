const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  const isLogin = false

  if (!isLogin) {
    ctx.app.emit('err', new Error('您还没有登录~'), ctx)
    return
  }

  ctx.body = '登录成功~'
})

app.on('err', (err, ctx) => {
  ctx.status = 401
  ctx.body = err.message
})

app.listen(8000, () => {
  console.log('部署静态资源服务器启动成功~')
})
