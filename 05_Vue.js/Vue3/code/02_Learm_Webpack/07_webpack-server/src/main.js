import {createApp} from 'vue' 
import axios from 'axios'

import {sum} from 'js/math'
const {priceFormat} = require('./js/format')

import App from '@/vue/App' // 会解析成./src/vue/App，这跟webpack配置里的resolve路径配置有关

import 'js/element'

if (module.hot) {
	// module.hot.accept接收需要热模块替换
	module.hot.accept('./js/element', () => {
		console.log('element热模块发生替换了');
	})
}

console.log(sum(20, 30))
console.log(priceFormat());

const app = createApp(App)
app.mount('#app')

console.log(666)
console.log('你好啊');

axios.get('/api/moment').then(res => {
	console.log(res);
}).catch(err => {
	console.log(err);
})
