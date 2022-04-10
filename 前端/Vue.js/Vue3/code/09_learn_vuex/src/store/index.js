import { createStore } from 'vuex'
import home from './modules/home'
import user from './modules/user'

const store = createStore({
  state() {
    return {
      rootCounter: 0
    }
  },
  mutations: {
    increment(state) {
      state.rootCounter++
    }
  },
  modules: {
    // 防止store对象变得相当臃肿，可以将store分割成模块（module）；
    // 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块；

    home,
    user
  }
})

export default store
