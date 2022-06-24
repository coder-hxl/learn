const Router = require('@koa/router')

const router = new Router({ prefix: '/users' })

router.get('/', (ctx, next) => {
  ctx.response.body = ['hxl', 'why', 'code']
})

router.post('/', (ctx, next) => {
  ctx.response.body = '注册成功~'
})

module.exports = router
