const { response } = require('express')
let express = require('express')
const { request } = require('http')

let app = express()

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/data', (request, response) => {
    response.send('用户数据')
})

app.listen(9000, () => {
    console.log("服务已启动，9000 端口监听中...");
})