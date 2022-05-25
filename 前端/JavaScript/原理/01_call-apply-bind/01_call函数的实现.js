Function.prototype.xlcall = function (thisArg, ...argArray) {
  // 1.获取需要执行的函数
  const fn = this

  // 2.对thisArg转成对象类型(防止传入非对象类型)
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  // 3.防止thisArg属性冲突
  const foo = Symbol('foo')
  thisArg[foo] = fn

  // 4.隐式执行函数
  const result = thisArg[foo](...argArray)
  delete thisArg[foo]

  // 5.返回结果
  return result
}

function foo() {
  console.log('foo', this)
}

function sum(num1, num2) {
  console.log('sum', this, num1, num2)
  return num1 + num2
}

// 系统的call方法
// foo.call({})

// 自己实现的xlcall方法
// foo.xlcall({})
// foo.xlcall(123)
// foo.xlcall(null)
const result = sum.xlcall({}, 10, 20)
console.log(result)
