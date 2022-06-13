const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('click', (...args) => {
  console.log('click事件1:', ...args)
})

emitter.on('click', (...args) => {
  console.log('click事件2:', ...args)
})

emitter.on('tap', (...args) => {
  console.log('tap事件1:', ...args)
})

// 返回注册的事件名
console.log(emitter.eventNames())
// 返回指定事件名的回调函数数量
console.log(emitter.listenerCount('click'))
// 返回指定事件名的回调函数
console.log(emitter.listeners('click'))
