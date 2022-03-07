// 1.interface: 可以重复的对某些接口来定义属性和方法
interface IFoo {
  name: string
}

interface IFoo {
  age: number
}

const foo: IFoo = {
  name: 'fh',
  age: 18
}

// document.getElementById('app') as HTMLDivElement
// window.addEventListener

interface Window {
  age: number
}
window.age = 18
console.log(window.age);


// 2.type: 定义的是别名，别名无法重复
type Bar = {
  name: string,
  age: number
}

// type Bar = {
// }
