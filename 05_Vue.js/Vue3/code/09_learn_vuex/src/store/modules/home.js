const homeModules = {
  // 默认情况下，模块内部的action、mutation和getter是注册在全局的命名空间中的
  // 可以添加 namespaced: true 的方式使其成为带命名空间的模块

  namespaced: true,
  state() {
    // 访问: $store.state.模块名.xxx

    return {
      homeCounter: 100
    }
  },
  getters: {
    // 访问: $store.getters['模块名/xxx']
    // getters后面的两个参数：rootState和rootGetters都是引用root的

    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2
    }
  },
  mutations: {
    // 访问:$store.commit('模块名/xxx')

    increment(state) {
      state.homeCounter++
    }
  },
  actions: {
    // 访问: $store.dispatch('模块名/xxx')
    // rootState和rootGetters都是引用root的

    incrementActions({ commit, dispatch, state, rootState, getters, rootGetters }) {
      commit('increment')

      // commit提交root中的mutations：给commit的第三个参数添加{root: true}
      commit('increment', null, {root: true})

      // dispatch派发root中的actions：给dispatche的第三个参数添加{root: true}
      // dispatch('increment', null, { root: true })
    }
  }
}

export default homeModules
