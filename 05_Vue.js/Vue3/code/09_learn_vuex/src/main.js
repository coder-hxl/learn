import { createApp } from 'vue'
import App from './App_nextTick.vue'
import store from './store/index'

// 在app中通过插件安装store
createApp(App).use(store).mount('#app')
