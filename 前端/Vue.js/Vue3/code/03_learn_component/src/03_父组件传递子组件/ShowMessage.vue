<template>
  <div>
    <!-- $attrs可以访问所有非props的attribute(属性) -->
    <h2 v-bind:="$attrs">{{ title }}</h2>
    <h2>{{ content }}</h2>
  </div>
</template>

<script>
/* 
		props可以接收父组件传递过来的参数，有数组或对象类型

		inheritAttrs是否希望组件的根元素继承没定义在props的attribute，默认为true
			- true：继承
			- flase：不继承

	 */

export default {
  inheritAttrs: false,
  // props: ['title', 'content']
  props: {
    // 可以指定传过来的类型
    // title: String,
    // content: String

    // 对象形式设置多种配置
    title: {
      type: String, // 指定传过来的数据类型
      required: true // 是否必传
    },
    content: {
      type: String,
      default: '111' // 默认值
    },
    info: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取，这跟引用类型有关
      default() {
        return { name: 'fh', content: '你好' }
      }
    },
    messageInfo: {
      type: String
    }
  }
}
</script>

<style scoped></style>
