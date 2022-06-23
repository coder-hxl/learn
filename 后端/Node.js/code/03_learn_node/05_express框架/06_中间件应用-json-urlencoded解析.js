const express = require('express')

const app = express()

// 自己编写的json解析
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', (data) => {
//       const body = JSON.parse(data.toString())
//       req.body = body
//     })

//     req.on('end', () => {
//       next()
//     })
//   } else {
//     next()
//   }
// })

// 使用 express 提供的 body 解析
// 类似 body-parser
app.use(express.json())
// extended
// true: 对 urlencoded 解析采用第三方库: qs
// false: 对 urlencoded 解析采用 Node 内置模块: queryString
app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('Coderhxl, Welcome Back~')
})

app.post('/products', (req, res, next) => {
  console.log(req.body)
  res.end('Upload Products Info Success~')
})

app.listen(8000, () => {
  console.log('json-urlencoded 解析服务器启动成功~')
})
