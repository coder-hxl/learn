import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface FHRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface FHRequestConfig extends AxiosRequestConfig {
  interceptors?: FHRequestInterceptors
}

export { FHRequestInterceptors, FHRequestConfig }
