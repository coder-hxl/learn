// <img id="fh" />

// 1.类型断言 as
const el = document.getElementById('fh') as HTMLImageElement
el.src = 'url地址'

// 2.案例：Person是Student的父类
class Person {}

class Student extends Person {
  studying() {}
}

function sayHello(p: Person) {
  ;(p as Student).studying()
}

const stu = new Student()
sayHello(stu)

// 3.了解: as any/unknown
const message = 'Hello'
const num: number = message as unknown as number
