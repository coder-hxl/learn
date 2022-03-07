class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log('eating');
  }
}

class Student extends Person {
  son: number

  constructor(name: string, age: number, son: number) {
    // super调用父类的构造器
    super(name, age)
    this.son = son
  }

  eating() {
    super.eating()
    console.log('Student eating');
  }

  studying() {
    console.log('studying');
  }
}


const stu = new Student('fh', 18, 1)
console.log(stu.name);
console.log(stu.age)
console.log(stu.son)
stu.eating()
