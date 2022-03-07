// 一种组合类型的方式：联合类型
type fhType = number | string
type Direction = 'left' | 'right' | 'center'


// 另一种组件类型的方式：交叉类型
// 要同时满足
type WType = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  swimming() {

  }
}

const obj2: MyType2 = {
  swimming() {

  },
  flying() {

  }
}
