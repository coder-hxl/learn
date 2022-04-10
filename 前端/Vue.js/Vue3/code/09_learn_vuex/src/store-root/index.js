import { createStore } from 'vuex'
import axios from 'axios'
import { INCREMENT_N } from './mutation-types'

// store本质上是一个容器，包含着应用中大部分的状态
const store = createStore({
  state() {
    // Vuex 状态

    return {
      counter: 100,
      name: 'fh',
      age: 17,
      books: [
        { book: 'vue.js', price: 222, count: 5 },
        { book: 'reate', price: 200, count: 3 },
        { book: 'node.js', price: 188, count: 2 },
        { book: 'webpack', price: 199, count: 1 }
      ],
      discount: 0.7,
      banner: []
    }
  },
  getters: {
    /*
      getters：可以认为是 store 的计算属性；

      getters对象里函数的参数：
        - 参数一：store对象的state；
        - 参数二：store对象的getters；
     */

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
      return function (n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count >= n) {
            totalPrice += book.price * book.count
          }
        }
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    }
  },
  mutations: {
    /*
      修改 Vuex 中的状态的唯一方法是提交 mutation。

      mutations对象里函数的参数：
        - 参数一：store对象的state；
        - 参数二：commit 提交的 第二个参数 或 提交风格为对象的那个对象
    */

    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    [INCREMENT_N](state, payload) {
      state.counter += payload.n
      console.log(payload)
    },
    addBannerData(state, payload) {
      state.banner = payload
    }
  },
  actions: {
    /*
      actions类似于 mutation，不同的是：
        - actions 通过提交 mutation 修改store的state，而不是直接修改；
        - actions 可以包含任意的异步操作；

      action 对象里函数的参数：
        - 参数一：接收一个与store实例具有相同方法和属性的context对象；
        - 参数二：dispatch发布的 第二个参数 或 提交风格为对象的那个对象；
    */

    incrementActions(context, payload) {
      console.log(payload)
      setTimeout(() => {
        // 调用context.commit提交一个mutation
        context.commit('increment')
      }, 1000)
    },
    decrementActions({
      commit,
      dispatch,
      getters,
      state,
      rootState,
      rootGetters
    }) {
      commit('decrement')
    },
    getHomeMultidata(context) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://123.207.32.32:8000/home/multidata')
          .then((res) => {
            context.commit('addBannerData', res.data.data.banner.list)
            resolve('请求成功~')
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})

export default store
