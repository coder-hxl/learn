const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  res.end('Hello Server')
})

// 启动服务器, 定制端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功~')
})
