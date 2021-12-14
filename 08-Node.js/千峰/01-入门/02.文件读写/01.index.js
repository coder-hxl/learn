let fs = require('fs')

fs.writeFile('./hello.txt','hello world',(err)=>{
    if(!err){
        console.log('文件创建成功');
    }
})