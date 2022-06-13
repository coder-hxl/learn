const EventEmitter = require('events')

const emitter = new EventEmitter()

// once只执行一次
emitter.once('click', (...args) => {
  console.log('click事件1:', ...args)
})

emitter.on('click', (...args) => {
  console.log('click事件2:', ...args)
})

// 将执行放置最前面
emitter.prependListener('click', (...args) => {
  console.log('click事件3:', ...args)
})

emitter.on('tap', (...args) => {
  console.log('tap事件1:', ...args)
})

setTimeout(() => {
  // 移除事件
  emitter.removeAllListeners('click')
  emitter.emit('click', 'code')
  emitter.emit('click', 'code')
  emitter.emit('tap', 'code')
}, 2000)
