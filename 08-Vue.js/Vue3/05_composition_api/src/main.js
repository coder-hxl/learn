import { createApp } from 'vue'
import App from './02_composiqtionAPI基础/App.vue'

const app = createApp(App)

// 全局混入：全局混入的选项将会影响每一个组件
// app.mixin({
// 	data() {
// 		return {}
// 	},
// 	methods: {
// 	},
// 	created() {
// 		console.log('全局的created');
// 	}
// })

app.mount('#app')
