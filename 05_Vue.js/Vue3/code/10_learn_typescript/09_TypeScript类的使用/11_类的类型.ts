class Person {
  name: string = '123'

  eating() {

  }
}

const p = new Person()

// 类本身是可以当成类型注解
const p2: Person = {
  name: 'fh',
  eating() {

  }
}

function printPerson(p: Person) {
  console.log(p.name);
}

printPerson(new Person())
printPerson({name: 'fh', eating() {}})
