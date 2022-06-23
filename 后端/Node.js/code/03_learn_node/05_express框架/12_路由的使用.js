const express = require('express')

const usersRouter = require('./routers/users')
const productsRouter = require('./routers/products')

const app = express()

app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(8000, () => {
  console.log('路由服务器启动成功~')
})
