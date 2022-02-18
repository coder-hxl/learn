import { createApp } from 'vue'
import { globalRegisterApp } from './global'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

app.use(globalRegisterApp)
app.use(router)
app.use(store)
app.mount('#app')
