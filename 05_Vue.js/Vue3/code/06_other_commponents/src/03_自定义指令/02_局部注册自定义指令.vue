<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>
  export default {
    // 对DOM元素进行底部操作就会用到自定义指令。注册自定义指令时的名称无需加v-前缀，但使用时要加

    // 注册局部指令：directives 选项
    directives: {
      focus: {
        // 里面使用生命周期
        mounted(el, bindings, vnode, preVnode) {
          console.log('focus mounted');
          el.focus()
        },
      }
    }
  }
</script>

<style scoped>

</style>