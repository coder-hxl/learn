<script>
import HelloWorld from './HelloWorld.vue'

export default {
  data() {
    return {
      counter: 0
    }
  },
  render() {
    const increment = () => this.counter++
    const decrement = () => this.counter--

    /* 
        jsx通过Babel来进行转换成h()
        jsx:
          注意事项：
            - 在里面写js代码要用单{}包裹
            - 添加事件则用 on事件名
            - 使用组件就直接用组件实例名

          使用插槽：
            {{default: props => <span>嘿嘿嘿</span>}}
       */
    return (
      <div class="app">
        <h2>{this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <HelloWorld></HelloWorld>
      </div>
    )
  }
}
</script>

<style scoped></style>
