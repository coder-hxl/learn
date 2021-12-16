let name = {
    myname: '浮幻',
    sayName(){
        console.log(this.myname);
    }
}

let age = {
    age: 17
}

module.exports = {name, age}