function createObject(o) {
  function Fn() {}
  Fn.prototype = o
  return new Fn()
}

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = createObject(SuperType.prototype)
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.running = function () {
  console.log('running~')
}

function Student(name, age, score) {
  Person.call(this, name, age)
  this.score = score
}

inheritPrototype(Student, Person)

Student.prototype.studying = function () {
  console.log('studying~')
}

const stu = new Student('hxl', 18, 666)
console.log(stu)
console.log(stu.name)
stu.studying()
stu.running()
