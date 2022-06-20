const http = require('http')

const server = http.createServer((req, res) => {
  // 设置响应的header
  // 1.setHeader
  // res.setHeader('content-type', 'text/plain;charset=utf8')
  // 2.writeHead
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8'
  })

  res.end('<h2>Hello Server</h2>')
})

server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功~')
})
