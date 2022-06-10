class XLEventBus {
  constructor() {
    this.eventBus = {}
  }

  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      this.eventBus[eventName] = handlers = []
    }
    handlers.push({ eventCallback, thisArg })
  }

  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    this.eventBus[eventName] = handlers.filter(
      (item) => item.eventCallback !== eventCallback
    )
  }

  emit(eventName, ...args) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach((item) => {
      item.eventCallback.apply(item.thisArg, args)
    })
  }
}

// 测试代码
const eventBus = new XLEventBus()

eventBus.on(
  'abc',
  function (...args) {
    console.log('abc1', args)
  },
  { name: 'coderhxl', age: 18 }
)

const callBack = function () {
  console.log('abc2', this)
}

eventBus.on('abc', callBack, { name: 'coderhxl', age: 18 })

eventBus.emit('abc', 'code')

eventBus.off('abc', callBack)

eventBus.emit('abc', 'code')
