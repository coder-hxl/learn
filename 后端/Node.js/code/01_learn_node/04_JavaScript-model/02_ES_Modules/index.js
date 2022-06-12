import { name, age } from './modules/foo.js'

console.log(name)
console.log(age)

setTimeout(() => {
  console.log(name)
}, 2000)
