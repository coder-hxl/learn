<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>Home：{{ counter }}</h2>
    <button @click="homeIncrement">homeCounter+1</button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    /* 
				在 后代组件 中可以通过 inject 来注入需要的属性和对应的值：
					inject(要inject的property的name, 默认值)
			 */
    const name = inject('name')
    let counter = inject('counter')

    const homeIncrement = () => counter.value++

    return {
      name,
      counter,
      homeIncrement
    }
  }
}
</script>

<style scoped></style>
