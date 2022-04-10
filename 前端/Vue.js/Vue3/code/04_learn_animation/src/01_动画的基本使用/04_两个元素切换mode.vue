<template>
  <div id="app">
    <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
    </div>

    <!-- 
			mode: 控制执行顺序
				- in-out：别的先进来，我再离开
				- out-in：我先离开，别的再进来
		 -->
    <transition name="fh" mode="out-in">
      <h2 class="title" v-if="isShow">Hello World</h2>
      <h2 class="title" v-else>你好 浮幻</h2>
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

.title {
  display: inline-block;
}

.fh-enter-from,
.fh-leave-to {
  opacity: 0;
}

.fh-enter-active,
.fh-leave-active {
  transition: opacity 1s ease;
}

/* transition和animation可以同时使用 */

.fh-enter-active {
  animation: bounce 1s ease;
}

.fh-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
