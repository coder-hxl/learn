<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from './mixins/demoMixin'

export default {
  mixins: [demoMixin],
  // 1.data函数的返回值对象：若属性有冲突，那么就会保留组件自身的数据；反之则合并；
  data() {
    return {
      title: '哈哈哈',
      message: 'Hello App'
    }
  },

  // 2. 值为对象的选项：若对象的key相同，那么会取组件对象的键值对；反之则合并；
  methods: {
    foo() {
      console.log('App')
    }
  },
  watch: {},

  // 3. 生命周期钩子函数：会被合并到数组中，都会被调用；
  created() {
    console.log('App created')
  }
}
</script>

<style scoped></style>
