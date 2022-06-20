const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.headers)
  res.end('Hello Server')
})

server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功~')
})
