function sum(num1, num2, num3) {
  return num1 + num2 + num3
}

function sumCurrying(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3
    }
  }
}

// 自动柯里化函数的实现
function xlCurrying(fn) {
  const curried = function (...args) {
    // 传进的参数个数 >= 目标函数参数个数就执行fn函数
    if (args.length >= fn.length) {
      return fn.call(this, ...args)
    } else {
      // 个数不够就返回个新函数, 继续接收参数
      return function (...args2) {
        // 递归curried
        return curried.call(this, ...args, ...args2)
      }
    }
  }

  return curried
}

const curryingAdd = xlCurrying(sum)

console.log(curryingAdd(10, 20, 30))
console.log(curryingAdd(10, 20)(30))
console.log(curryingAdd(10)(20)(30))
