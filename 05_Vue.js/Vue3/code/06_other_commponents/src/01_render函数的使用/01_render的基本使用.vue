<script>
  import { h } from 'vue'

  export default {
    // render渲染函数，编写的 template 中的HTML是使用render函数生成对应的VNode，然后VNode再转成真实DOM
    render() {
      /* 
        h()是一个用于创建 vnode 的一个函数，它接受三个参数
       */
      return h('h2', {class: 'title'}, 'Hello Render')
    },
  }
</script>

<style scoped>

</style>