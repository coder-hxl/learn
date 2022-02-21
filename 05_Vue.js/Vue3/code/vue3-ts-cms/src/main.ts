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

// fhRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求成功')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应成功')
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

fhRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
