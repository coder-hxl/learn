const fs = require('fs')
const sharp = require('sharp')

// fs.readFile('./foo.txt', (err, res) => {
//   console.log(res)
//   console.log(res.toString())
// })

fs.readFile('./foo.jpg', (err, res) => {
  console.log(res)
  fs.writeFile('./bar.jpg', res, (err) => console.log(err))
})

// sharp 对图片进行修改
sharp('./bar.jpg')
  .resize(200, 200)
  .toFile('./baz.jpg', (err) => console.log(err))
