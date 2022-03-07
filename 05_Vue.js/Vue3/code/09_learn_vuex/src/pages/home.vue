<template>
  <div>
    <h2>{{ homeCounter }}</h2>
    <h2>{{ doubleHomeCounter }}</h2>
    <hr>
    <button @click='increment'>home+1</button>
    <button @click='incrementActions'>home+1</button>
    <hr>
  </div>
</template>

<script>
  // 写法一和二使用的：
  // import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  // 写法三使用的：
  import { createNamespacedHelpers } from 'vuex'

  // setup里使用的：
  import { useState, useGetters } from '../hooks'

  const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('home')


  export default {
    computed: {
      // 1.写法一：
      // ...mapState({
      //   homeCounter: state => state.home.homeCounter
      // }),
      // ...mapGetters({
      //   doubleHomeCounter: 'home/doubleHomeCounter'
      // })

      // 2.写法二：参数一是模块名字
      // ...mapState('home', {
      //   homeCounter: state => state.homeCounter
      // }),
      // ...mapGetters('home', {
      //   doubleHomeCounter: 'doubleHomeCounter'
      // })

      // 3.写法三：引用vuex的createNamespacedHelpers，调用并传入模块名，进行解构后使用
      // ...mapState(['homeCounter']),
      // ...mapGetters(['doubleHomeCounter'])
    },
    methods: {
      // 1.写法一：
      // ...mapMutations({
      //   increment: 'home/increment'
      // }),
      // ...mapActions({
      //   incrementActions: 'home/incrementActions'
      // })

      // 2.写法二：
      // ...mapMutations('home', {
      //   increment: 'increment'
      // }),
      // ...mapActions('home', {
      //   incrementActions: 'incrementActions'
      // })

      // 3.写法三：
      // ...mapMutations(['increment']),
      // ...mapActions(['incrementActions'])
    },

    setup() {
      const state = useState('home', ['homeCounter'])
      const getters = useGetters('home', ['doubleHomeCounter'])

      const mutations = mapMutations(['increment'])
      const actions = mapActions(['incrementActions'])

      return {
        ...state,
        ...getters,
        ...mutations,
        ...actions
      }
    }
  }
</script>

<style scoped>

</style>
