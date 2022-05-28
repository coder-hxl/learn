// never 表示永远不会返回值的类型

function foo(): never {
  while (true) {}
}

function bar(): never {
  throw new Error()
}

// 应用场景：
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log('用string处理方式处理message')
      break
    case 'number':
      console.log('用number处理方式处理message')
      break
    case 'boolean':
      console.log('用boolean处理方式处理message')
      break
    default:
      const check: never = message
  }
}

handleMessage('a')
handleMessage(1)

handleMessage(true)
