Function.prototype.xlbind = function (thisArg, ...argArray) {
  // 1.获取要执行的函数
  const fn = this

  // 2.转成对象类型
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  // 3.执行函数
  return function (...arg) {
    const foo = Symbol('foo')
    thisArg[foo] = fn

    const result = thisArg[foo](...argArray, ...arg)
    delete thisArg[foo]

    return result
  }
}

function sum(num1, num2) {
  console.log('sum', this, num1, num2)
  return num1 + num2
}

// 系统的bind方法
// const newSum = sum.bind({}, 10)
// newSum(20)

// 自己实现的xlbind方法
const newSum = sum.xlbind({ name: 'coderhxl' }, 10)
newSum(20)
newSum(30)
