const http = require('http')

// 1.创建服务器的方式
const server1 = http.createServer((req, res) => {
  res.end('server1')
})

// server1.listen(8000, () => {
//   console.log('server1启动成功')
// })

// const server2 = new http.Server((req, res) => {
//   res.end('server2')
// })

// server2.listen(8001, () => {
//   console.log('server2启动成功')
// })

// 2.启动服务器参数分析
server1.listen(8000, () => {
  console.log('server1启动成功')
  // console.log(server1.address().port)
})
