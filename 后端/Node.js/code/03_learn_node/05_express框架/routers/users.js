/*
 *  举个例子:
 *    请求所有用户信息: get /users
 *    请求某个用户信息: get /users/:id
 *    请求创建某个用户信息: post /users body { username: , password: }
 *    请求删除某个用户信息: delete /users/:id
 *    请求修改某个用户信息: patch /users/:id body { nickname: }
 */

const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json(['hxl', 'why', 'pink'])
})

router.get('/:id', (req, res, next) => {
  res.json({ name: 'hxl', age: 18 })
})

router.post('/', (req, res, next) => {
  res.end('创建用户成功~')
})

module.exports = router
