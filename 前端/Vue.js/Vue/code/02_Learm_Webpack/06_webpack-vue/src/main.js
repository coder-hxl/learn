import { createApp } from 'vue' // vue有很多版本，通过@vue/compiler-sfc解析则不需要引用vue/dist/vue.esm-bundler
import { sum } from './js/math'
const { priceFormat } = require('./js/format')

import App from './vue/App.vue'

import './js/element'

console.log(sum(20, 30))
console.log(priceFormat())

// Vue
// const app = createApp({
// 	template: '#my-app',
// 	data() {
// 		return {
// 			title: 'Hello World',
// 			message: '哈哈哈'
// 		}
// 	}
// })
const app = createApp(App)
app.mount('#app')
