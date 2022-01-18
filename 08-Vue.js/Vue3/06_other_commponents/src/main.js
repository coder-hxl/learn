import { createApp } from 'vue'
import App from './03_自定义指令/App.vue'
import registerDirectives from './directives'

const app =  createApp(App)

registerDirectives(app)


// 注册全局指令：directive 方法
// app.directive('focus', {
// 	// 里面使用生命周期函数
// 	mounted(el, bindings, vnode, preVnode) {
// 		console.log('focus mounted');
// 		el.focus()
// 	},
// })

app.mount('#app')
