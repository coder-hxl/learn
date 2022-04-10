<script>
import { h } from 'vue'

export default {
  render() {
    return h('div', null, [
      h('h2', null, 'HelloWorld'),
      // 定义插槽
      this.$slots.default
        ? this.$slots.default({ name: 'fh' })
        : h('span', null, '我是HelloWorld插槽默认值')
    ])
  }
}
</script>

<style scoped></style>
