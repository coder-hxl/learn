// 函数的重载：函数的名称相同，但是参数不同的几个函数，就是函数的重载

function add(num1: number, num2: number): number // 没函数体
function add(str1: string, str2: string): string

function add(any1: any, any2: any): any {
  if (typeof any1 === 'string' && typeof any2 === 'string') {
    return (any1 + any2).length
  }
  return any1 + any2
}

console.log(add(10, 20));
console.log(add('abc', 'cba'));

// 在函数的重载中，实现函数是不能直接被调用的
// add({name: 'fh'}, {age: 18})
