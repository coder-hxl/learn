setTimeout(() => {
  console.log('setTimeout')
}, 0)

setImmediate(() => {
  console.log('setImmediate')
})

// 问题: setTimeout setImmediate
// 都有可能, 跟执行时机有关系
