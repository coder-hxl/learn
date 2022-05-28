// public: 修饰的是任何地方都可见，默认编写的属性就是public的；
// prvate: 修饰的是仅在私有的，在当前类内部访问；

class Person {
  // public name: string = ''
  private name: string = ''

  getName() {
    return this.name
  }

  setName(newName: string) {
    this.name = newName
  }
}

const p = new Person()
p.setName('fuhuan')
console.log(p.getName())
