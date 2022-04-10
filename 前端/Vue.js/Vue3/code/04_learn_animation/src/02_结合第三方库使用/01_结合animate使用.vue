<template>
  <div id="app">
    <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
    </div>

    <!-- 
			enter-active-class：定义 v-enter-active 类名
			leave-active-class：定义 v-leave-active 类名
			这些优先级更高
		 -->
    <transition
      enter-active-class="animate__animated animate__bounceInDown"
      leave-active-class="animate__animated  animate__bounceInUp"
    >
      <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
#app {
  width: 200px;
  margin: 0 auto;
}

/* 直接使用动画名 */
/* .fh-enter-active {
		animation: bounceInUp 1s ease;
	}

	.fh-leave-active {
		animation: bounceInUp 1s ease reverse;
	} */

/* 使用animate库的animate__bounceInUp类添加翻转 */
.animate__bounceInUp {
  animation-direction: reverse;
}
</style>
