const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  // if (req.url === '/login') {
  //   res.end('欢迎回来~')
  // } else if (req.url === '/user') {
  //   res.end('你好啊~')
  // } else {
  //   res.end('获取错误, 请检查~')
  // }

  // /login?username=coderhxl&password=123456
  const { pathname, query } = url.parse(req.url)
  if (pathname === '/login') {
    const params = new URLSearchParams(query)
    params.forEach((value) => console.log(value))
    res.end('你好啊~')
  }

  // console.log(req.url)
  // res.end('Hello Server')
})

server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功~')
})
