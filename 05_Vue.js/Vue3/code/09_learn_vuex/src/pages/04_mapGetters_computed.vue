<template>
  <div>
    <h2>总价格：{{ $store.getters.totalPrice }}</h2>
    <h2>总价格：{{ $store.getters.totalPriceCountGreaterN(2) }}</h2>
    <hr>
    <h2> {{ nameInfo }} </h2>
    <h2> {{ ageInfo }} </h2>
    <hr>
    <h2> {{ sNameInfo }} </h2>
    <h2> {{ sAgeInfo }} </h2>
    <hr>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      // nameInfo() {
      //   return this.$store.getters.nameInfo
      // }

     /* 
     getters的辅助函数mapGetters
      - 数组用法跟mapState一样
      - 对象用法需传入自定义的key，value为字符串类型是getters里要使用的函数名
     */
      ...mapGetters(['nameInfo', 'ageInfo']),
      ...mapGetters({
        sNameInfo: 'nameInfo',
        sAgeInfo: 'ageInfo'
      })
    }
  }
</script>

<style scoped>

</style>