const Koa = require('koa')

const app = new Koa()

// 注册中间件
app.use((ctx, next) => {
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'GET') {
      console.log('Login GET~')
      ctx.response.body = 'Login Success~'
    }
  } else {
    ctx.response.body = 'Hello Koa~'
  }
})

// 没有提供以下方式
// methods方式: app.get()/.post()
// path方式: app.use('/home/', (ctx, next) => {})
// 连续注册: app.use((ctx, next) => {}, (ctx, next) => {})

app.listen(8000, () => {
  console.log('注册中间件服务器启动成功~')
})
