<template>
  <div>
    <h2>home: {{ $store.state.counter }}</h2>
    <h2>home: {{ sCounter }}</h2>
    <h2>home: {{ sName }}</h2>
    <!-- <h2>home: {{ age }}</h2> -->
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      fullName() {
        return 'kobe Bryant'
      },
      
      // 其他的计算属性，从state获取
      // 使用vuex的 mapState 映射 state 
      /* 
        mapState参数：
          - 数组形式：里面的元素对应着state里面的key；
          - 对象形式：自定义key，值是一个函数，参数是state；

        mapState的返回值：一个对象
       */

      // ...mapState(['counter', 'name', 'age'])
      ...mapState({
        sCounter: state => state.sCounter,
        sName: state => state.name
      })
    }
  }
</script>

<style scoped>

</style>