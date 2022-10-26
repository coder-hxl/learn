const { createStore } = require('redux')

const reducer = require('./reducer')

// 创建 store
const store = createStore(reducer)

module.exports = store
