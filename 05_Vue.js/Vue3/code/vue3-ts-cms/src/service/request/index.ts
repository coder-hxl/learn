import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import { FHRequestInterceptors, FHRequestConfig } from './type'

class FHRequest {
  instance: AxiosInstance
  interceptors?: FHRequestInterceptors

  constructor(config: FHRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default FHRequest
