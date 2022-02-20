import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { FHRequestInterceptors, FHRequestConfig } from './type'
import { ElLoading } from 'element-plus'

const DEAFULT_LOADING = true

class FHRequest {
  instance: AxiosInstance
  interceptors?: FHRequestInterceptors
  showLoading: boolean
  loading?: any

  constructor(config: FHRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEAFULT_LOADING

    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('添加所有的实例都有的拦截器: 请求成功拦截')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据中...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('添加所有的实例都有的拦截器: 请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('添加所有的实例都有的拦截器: 响应成功拦截')

        // 将loading移除
        this.loading?.close()

        const data = res.data
        if (data.returnCode == '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        console.log('添加所有的实例都有的拦截器: 相应失败拦截')

        // 将loading移除
        this.loading?.close()

        // 例子：判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.state === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }

  request(config: FHRequestConfig) {
    // 1.单个请求对config的处理
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    // 2.判断是否需要显示loading
    if (config.showLoading === false) {
      this.showLoading = config.showLoading
    }

    this.instance
      .request(config)
      .then((res) => {
        // 1.单个请求对数据的处理
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        // 2.将showLoading设置为true, 这样不会影响下一个请求
        this.showLoading = DEAFULT_LOADING
        console.log(res)
      })
      .catch((err) => {
        // 将showLoading设置为true, 这样不会影响下一个请求
        this.showLoading = DEAFULT_LOADING
        return err
      })
  }
}

export default FHRequest
