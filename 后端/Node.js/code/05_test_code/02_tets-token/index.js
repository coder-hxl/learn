const fs = require('node:fs')

const Koa = require('koa')
const Router = require('@koa/router')
const jwt = require('jsonwebtoken')

const PRIVATE_KEY = fs.readFileSync('./keys/private.key')
const PUBLIC_KEY = fs.readFileSync('./keys/public.key')

const app = new Koa()
const testRouter = new Router()

testRouter.post('/test', (ctx, next) => {
  const user = { id: 1, name: 'hxl' }
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 10,
    algorithm: 'RS256'
  })

  ctx.body = token
})

testRouter.post('/demo', (ctx, next) => {
  const token = ctx.header.authorization.replace('Bearer ', '')

  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    })
    ctx.body = result
  } catch (err) {
    console.log(err.message)
    ctx.body = 'token 无效~'
  }
})

app.use(testRouter.routes())

app.listen(8080, () => {
  console.log('服务器启动成功~')
})
