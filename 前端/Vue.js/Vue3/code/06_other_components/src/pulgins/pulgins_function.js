import dayjs from 'dayjs'

export default function (app) {
  console.log(app)

  // 可以通过插件直接注册全局指令
  let formatString = 'YYYY-MM-DD HH:mm:ss'
  app.directive('format-times', {
    created(el, bindings) {
      if (bindings.value) {
        formatString = bindings.value
      }
    },
    mounted(el, bindings) {
      const textContent = el.textContent
      let timestamp = parseInt(textContent)
      if (textContent.length === 10) {
        timestamp *= 1000
      }
      el.textContent = dayjs(timestamp).format(formatString)
    }
  })
}
