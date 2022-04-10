<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- transition：内置组件，用于给单个元素或组件添加动画 -->
    <transition name="fh">
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
/* 
		如果transition组件没有name属性，那么class以 v- 作为默认前缀：
			v-enter-from：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
			v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，会在过渡/动画完成之后移除。用于定义进入过渡的过程时间，延迟和曲线函数。
			v-enter-to：定义进入过渡的结束状态。在元素被插入之后下一帧生效（与此同时 v-enter-from 被移除），会在过渡/动画完成之后移除。

			v-leave-from：定义离开过渡的开始状态。在离开过渡被触发时生效，下一帧移除。
			v-leave-active：定义进入离开生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时离开生效，会在过渡/动画完成之后移除。用于定义进入过渡的过程时间，延迟和曲线函数。
			v-leave-to：定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效（与此同时 v-enter-from 被移除），会在过渡/动画完成之后移除。
	 */
.fh-enter-from,
.fh-leave-to {
  opacity: 0;
}

.fh-enter-to,
.fh-leave-from {
  opacity: 1;
}

.fh-enter-active,
.fh-leave-active {
  transition: opacity 2s ease;
}
</style>
