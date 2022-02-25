import FHRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const fhRequest = new FHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = ''
      if (token) {
        config.headers ? (config.headers.Authorization = `Bearer ${token}`) : ''
      }

      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})

export default fhRequest
