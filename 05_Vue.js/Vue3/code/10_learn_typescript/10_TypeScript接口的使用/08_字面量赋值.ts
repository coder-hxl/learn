interface IPerson {
  name: string
  age: number
}

// const info = {
//   name: 'fh',
//   age: 18,
//   address: '阳江'
// }

// freshness擦除
// 因为ts在字面量直接赋值过程中，为了进行类型检测推导会进行严格的类型限制
// 但是将一个 变量标识符 赋值给其他变量时，会进行freshness擦除操作
// const p: IPerson = info

// console.log(p);
// console.log(info);


function printInfo(person: IPerson) {
  console.log(person);
}

// 会报错
// printInfo({
//   name: 'fh',
//   age: 18,
//   address: '阳江'
// })

// 不会报错
const info = {
  name: 'fh',
  age: 18,
  address: '阳江'
}
printInfo(info)
