const Koa = require('koa')
const koaStatic = require('koa-static')

const app = new Koa()

app.use(koaStatic('./dist'))

app.listen(8000, () => {
  console.log('部署静态资源服务器启动成功~');
})
