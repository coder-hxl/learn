class Person {
  name: string = ''
  age: number = 0

  eating() {
    console.log('eating');
  }
}

class Student extends Person {
  son: number = 0

  studying() {
    console.log('studying');
  }
}

class Teacher extends Person {
  title: string = ''

  teaching() {
    console.log('teaching');
  }
}


const stu = new Student()
stu.name = 'fh'
stu.age = 18
console.log(stu.name);
console.log(stu.age)
stu.eating()
