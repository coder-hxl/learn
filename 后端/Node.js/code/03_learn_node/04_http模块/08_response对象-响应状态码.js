const http = require('http')

const server = http.createServer((req, res) => {
  // 设置状态码
  // 1.直接给属性赋值
  // res.statusCode = 401
  // 2.调用writeHead
  res.writeHead(401)

  res.end('Hello Server')
})

server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功~')
})
