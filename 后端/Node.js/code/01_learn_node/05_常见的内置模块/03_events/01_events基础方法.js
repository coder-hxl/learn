const EventEmitter = require('events')

// 1.创建监听器
const emitter = new EventEmitter()

// 2.监听某一个事件
// addListener是on的简写
emitter.on('click', (...args) => {
  console.log('click事件1:', ...args)
})

const listener2 = (...args) => {
  console.log('click事件2:', ...args)
}
emitter.on('click', listener2)

// 3.发出事件
setTimeout(() => {
  emitter.emit('click', 'coderwhy', 'coderhxl')
  emitter.off('click', listener2)
  emitter.emit('click', 'coderwhy', 'coderhxl')
}, 2000)
