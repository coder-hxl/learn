const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  // 设置内容
  // ctx.response.body = 'Hello World'
  // ctx.response.body = {
  //   name: 'hxl',
  //   age: 18
  // }
  // ctx.response.body = ['hxl', 'why']

  // 设置状态码
  // ctx.response.status = 200

  ctx.status = 404
  ctx.body = ['hxl', 'why']
})

app.listen(8000, () => {
  console.log('响应内容服务器启动成功~');
})
