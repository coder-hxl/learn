Function.prototype.xlapply = function (thisArg, argArray = []) {
  // 1.获取要执行的函数
  const fn = this

  // 2.转成对象类型
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

function sum(num1, num2) {
  console.log('sum', this, num1, num2)
  return num1 + num2
}

// 系统的apply方法
// foo.apply({ name: 'hxl' })
// sum.apply({}, [10, 20])

// 自己实现的xlapply方法
// sum.xlapply({ name: 'hxl' }, [10, 30])
sum.xlapply({ name: 'hxl' })
