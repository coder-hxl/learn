<template>
  <div>
    <h2>{{message}}</h2>
    <button @click='foo'>按钮</button>
  </div>
</template>

<script>
  import { demoMixin } from './mixins/demoMixin'

  /* 
    mixins：用于对相同的代码逻辑进行抽取混合。
      - 一个Mixin对象可以包含任何组件选项；
      - 组件使用Mixin对象时，所有Mixin对象的选项将会被 混合 进入该组件本身的选项中；
   */

  export default {
    mixins: [demoMixin],
    data() {
      return {
        title: '哈哈哈'
      }
    }
  }
</script>

<style scoped>

</style>