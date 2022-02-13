// class Person {
//   name: string = 'fh'
// }

// const p = new Person()
// p.name = 'code'


class Student {
  // 通过 static 关键字定义静态成员
  static time = '08:00'

  static attendClass() {
    console.log('去学习~');
  }
}

console.log(Student.time);
Student.attendClass()
