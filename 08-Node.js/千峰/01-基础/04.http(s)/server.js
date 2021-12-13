const http = require('http')

let server = http.createServer((request, response)=>{
    let url =  request.url
    response.write(url)
    response.end()
})

server.listen(8090,()=>{
    console.log('端口号8090已开启');
})