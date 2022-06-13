const fs = require('fs')

fs.open('./abc.txt', (err, fd) => {
  console.log(fd)

  // 通过文件描述符去获取文件信息
  fs.fstat(fd, (err, stats) => {
    console.log(stats)
  })
})
