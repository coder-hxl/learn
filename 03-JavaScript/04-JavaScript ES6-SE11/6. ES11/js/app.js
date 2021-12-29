// import * as m1 from './hello.js' 静态导入 用不用都会导入
let btn = document.querySelector('#btn')

btn.addEventListener('click',function(){
    // 动态导入 得到一个 Promise 对象
    import('./hello.js').then(module =>{
        module.hello()
    })
})