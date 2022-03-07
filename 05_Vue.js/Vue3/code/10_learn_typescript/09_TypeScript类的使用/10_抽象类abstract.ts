function makeArea(shape: Shape) {
  return shape.getArea()
}


// 1.抽象类不能实例化
// 2.抽象类的抽象成员，需要被子类实现，除非子类也是抽象类
abstract class Shape {
  abstract getArea()
}

class Rectangle extends Shape {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  private r: number

  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

console.log(makeArea(new Rectangle(50, 10)));
console.log(makeArea(new Circle(10)));
// makeArea(new Shape())

// makeArea('abc')
// makeArea(123)
