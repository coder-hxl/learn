import { createApp } from 'vue'
import { globalRegisterApp } from './global'

// import './service/axios_demo'
import fhRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

app.use(globalRegisterApp)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

fhRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
