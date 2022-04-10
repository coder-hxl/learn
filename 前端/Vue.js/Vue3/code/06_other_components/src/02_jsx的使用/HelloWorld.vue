<script>
export default {
  // jsx定义插槽：{this.$slots.default ? this.$slots.default() : 默认插槽值}
  render() {
    return (
      <div>
        <h2>我是Hello World组件</h2>
        {this.$slots.default ? this.$slots.default() : <span>哈哈哈</span>}
      </div>
    )
  }
}
</script>

<style scoped></style>
