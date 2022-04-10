// 默认情况下，所有的 ts 文件都是在同一个作用域下编译
// 可以使用 模块export 把当前文件变成单独的作用域

const name: string = 'abc'
const age: number = 17

console.log(name)
console.log(age)

export {}
