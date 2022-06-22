const http = require('http')
const fs = require('fs')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {
      // 设置编码
      req.setEncoding('binary')

      let body = ''
      const boundary = req.headers['content-type']
        .split('; ')[1]
        .replace('boundary=', '')

      req.on('data', (data) => {
        body += data
      })

      req.on('end', () => {
        // 处理 body
        const fileName = getPngTypeFileName(body)

        // 1.获取 image/png 的位置
        // const contentType = qs.parse(body, '\r\n', ': ')['Content-Type']
        const contentType = body.split('Content-Type: ')[1].split('\r\n')[0]

        // 2.从 image/png 开始截取
        const typeIndex = body.indexOf(contentType)
        const typeLength = contentType.length
        let imageDate = body.substring(typeIndex + typeLength)

        // 3.去掉前面的 换行符
        imageDate = imageDate.replace(/^\s\s*/, '')

        // 4.将最后的 boundary 去掉
        imageDate = imageDate.substring(0, imageDate.indexOf(`--${boundary}--`))

        fs.writeFile(fileName, imageDate, 'binary', () => {
          res.end('文件上传成功~')
        })
      })
    }
  }
})

server.listen(8000, () => {
  console.log('文件上传服务器开启成功~')
})

function getPngTypeFileName(body) {
  // 对 body 进行切割
  let fileNameSplit = body
    .split('; ')
    .find((item) => item.includes('filename'))
    .split('=')[1]

  fileNameSplit = fileNameSplit.substring(1, fileNameSplit.length - 1)

  // 进行编码转换
  const fileName = Buffer.from(fileNameSplit, 'binary').toString()

  return fileName
}
