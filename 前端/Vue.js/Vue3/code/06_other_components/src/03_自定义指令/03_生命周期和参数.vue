<template>
  <div>
    <button v-if="counter < 2" v-fh:name.aaa.bbb="'浮幻'" @click="clickBtn">
      当前计数：{{ counter }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  directives: {
    fh: {
      /* 
          自定义指令对象的钩子函数：
            - created：在绑定元素的 attribute 或事件监听器被应用之前调用；
            - beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用；
            - mounted：在绑定元素的父组件被挂载后调用；
            - beforeUpdate：在更新包含组件的 VNode 之前调用；
            - updated：在包含组件的 VNode 及其子组件的 VNode 更新后调用；
            - beforeUnmount：在卸载绑定元素的父组件之前调用；
            - unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次；
         */

      created(el, bindings, vnode, preVnode) {
        console.log('fh created', el, bindings, vnode, preVnode)
        /* 
            bindings里面存放着修饰符与值：
              - bindings.info：获取参数的名称；
              - bindings.value：获取传入的值；
              - bindings.modifiers：获取到一个对象，里面存放着修饰符。键为修饰符名，值为布尔值。若使用值则为ture，反之为false；
           */
        console.log(bindings.info)
        console.log(bindings.value)
        console.log(bindings.modifiers)
      },
      beforeMount() {
        console.log('fh beforeMount')
      },
      mounted() {
        console.log('fh mounted')
      },
      beforeUpdate() {
        console.log('fh beforeupdate')
      },
      updated() {
        console.log('fh updated')
      },
      beforeUnmount() {
        console.log('fh beforeUnmount')
      },
      unmounted() {
        console.log('fh unmounted')
      }
    }
  },
  setup() {
    const counter = ref(0)
    const clickBtn = () => counter.value++

    return {
      counter,
      clickBtn
    }
  }
}
</script>

<style scoped></style>
