const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {
      // 不能将传过来的 data 直接写入
      const writeImage = fs.createWriteStream('./foo.png', { flags: 'a+' })

      req.on('data', (data) => {
        writeImage.write(data)
      })

      req.on('end', () => {
        res.end('文件上传成功~')
      })
    }
  }
})

server.listen(8000, () => {
  console.log('文件上传服务器开启成功~')
})
