let name = {
    myname: '浮幻',
    sayName(){
        console.log(this.myname);
    }
}

let age = {
    age: 17
}

/* 
    模块化exports，用于向外暴露
    方法：
        - exports
            必须以 . 的形式
            如果直接用 = 赋值方式会重新改变exports的指向

        - module.exports
            既可以 . 又可以 = 赋值的形式
*/  

// exports.name = name
// exports.age = age

module.exports = {name, age}
console.log(module.exports);
