const express = require('express')

const app = express()

app.use(express.static('./build'))

app.listen(8000, () => {
  console.log('静态资源服务器启动成功~')
})
