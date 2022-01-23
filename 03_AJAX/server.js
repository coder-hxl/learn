const { response } = require('express')
const express = require('express')
const { request } = require('http')
const { json } = require('stream/consumers')
const app = express()
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    response.send('hello ajax - 3')
})

// 可以接收任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*')

    // 设置响应体
    response.send('hello ajax post')
})

// JSON响应
app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*')

    // 响应一个数据
    const data = {
        name: 'fh'
    }
    let str = JSON.stringify(data)
        // 设置响应体
    response.send(str)
})

// 延时响应
app.all('/delay', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
        // 设置响应体
    setTimeout(function() {
        response.send('延时响应')
    }, (3000))
})

// axios 服务
app.all('/axios-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    // 设置响应体
    let data = { name: '浮幻' }
    response.send(JSON.stringify(data))
})

// fetch 服务
app.all('/fetch-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    // 设置响应体
    let data = { name: '浮幻' }
    response.send(JSON.stringify(data))
})

// jsonp 服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("jsonp-server");')
    let data = {
        name: '浮幻'
    }
    let str = JSON.stringify(data)
    response.end(`han(${str})`)
})


// 检测用户名是否存在
app.all('/check-uname', (request, response) => {
    let data = {
        exist: 1,
        msg: '用户已存在'
    }
    let str = JSON.stringify(data)
    response.end(`han(${str})`)
})

// cors 服务
app.all('/cors-server', (request, response) => {
    // 设置跨域响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('成功')
})

// 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000 端口监听中...");
})