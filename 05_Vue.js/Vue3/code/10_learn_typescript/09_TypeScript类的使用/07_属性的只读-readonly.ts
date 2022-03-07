class Person {
  // 1.只读属性本身是可以在构造器中赋值，赋值之后不可以修改
  // 2.属性本身不能进行修改，但是如果它是对象类型，对象中的属性是可以修改
  readonly name: string
  age?: number
  readonly friend?: Person

  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person('fuhuan', new Person('code'))
console.log(p.name);

// 不可以直接修改friend
// p.friend = new Person('why')

if (p.friend) {
  p.friend.age = 18
}
console.log(p.friend);
