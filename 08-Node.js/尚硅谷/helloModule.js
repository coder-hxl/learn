// module.exports.uname = '浮幻'
// module.exports.age = 17
// module.exports.myname = function(){
//     console.log('我是浮幻');
// }

module.exports = {
    uname:'浮幻',
    age: 17,
    myname: function(){ 
        console.log('我是浮幻');
    }
}

/* exports 和 module.exports 
    - 直接使用 exports 只能通过 . 的方式向外暴露
        exports.xxx = xxx

    - 而使用 module.exports 既可以通过. 也可以直接赋值
        module.exports = xxx
        module.exports = {}

*/
