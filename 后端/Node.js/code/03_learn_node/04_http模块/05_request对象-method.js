const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === '/login') {
    if (req.method === 'POST') {
      req.setEncoding('utf-8')
      // 拿到 body 里面的数据
      req.on('data', (data) => {
        console.log(JSON.parse(data))
      })
      res.end('Hello Server')
    }
  }

  // res.end('Hello Server')
})

server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功~')
})
