const store = require('./store/index')
const { changeNameAction, addNumberAction } = require('./store/actionCreators')

// 获取state
console.log(store.getState())

// 对store订阅
const unsubscribe = store.subscribe(() => {
  console.log('subscribe', store.getState())
})

// 触发对state更改
store.dispatch(changeNameAction('why'))
store.dispatch(changeNameAction('pink'))

// 取消store的订阅
unsubscribe()

store.dispatch(addNumberAction(20))
