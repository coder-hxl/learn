import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface FHRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface FHRequestConfig extends AxiosRequestConfig {
  interceptors?: FHRequestInterceptors
  showLoading?: boolean
}

export { FHRequestInterceptors, FHRequestConfig }
