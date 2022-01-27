import { createStore } from 'vuex'

// 创建 store 仓库
// store本质上是一个容器，包含着应用中大部分的状态
const store = createStore({
  // 创建状态
  state() {
    return {
      counter: 100,
      name: 'fh',
      age: 17,
      books: [
        { book: 'vue.js', price: 222, count: 5},
        { book: 'reate', price: 200, count: 3 },
        { book: 'node.js', price: 188, count: 2 },
        { book: 'webpack', price: 199, count: 1 }
      ],
      discount: 0.7
    }
  },
  // 变化
  // 组件提交commit()后，会来此执行 提交的参数跟这里的函数 名称一致的函数
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  getters: {
    // getters对象里函数的参数：第一个参数是store对象的state，第二个参数是store对象的getters
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.price * book.count
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    totalPriceCountGreaterN(state, getters) {
      return function(n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count >= n) {
            totalPrice += book.price * book.count
          }
        }
        return totalPrice * getters.currentDiscount
      }
    }
  }
})

export default store