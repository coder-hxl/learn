import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface FHRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface FHRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: FHRequestInterceptors<T>
  showLoading?: boolean
}

export { FHRequestInterceptors, FHRequestConfig }
