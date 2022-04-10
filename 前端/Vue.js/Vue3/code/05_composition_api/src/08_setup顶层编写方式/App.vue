<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>

    <hello-world message="哈哈哈" @increment="getCounter"></hello-world>
  </div>
</template>

<script setup>
/* 
		<script setup> 是组合式API的编译时语法糖，里面的代码会被编译成组件 setup() 函数的内容。
		任何在 <script setup> 声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用
	 */

import { ref } from 'vue'
// 想使用组件直接导入，并在模板中用组件实例
import HelloWorld from './HelloWorld.vue'

const counter = ref(0)
const increment = () => counter.value++

const getCounter = (payload) => {
  console.log(payload)
}
</script>

<style scoped></style>
