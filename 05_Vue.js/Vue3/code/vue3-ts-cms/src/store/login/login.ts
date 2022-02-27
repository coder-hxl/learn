import { defineStore, StateTree } from 'pinia'

import { accountLoginRequest, userInfoRequest } from '@/service/login/login'
import localCache from '@/utils/cache'

import { IAccount } from '@/service/login/type'
import { ILoginState, IloginActions } from './type'

export const useLoginStore = defineStore<
  string,
  ILoginState,
  StateTree,
  IloginActions
>({
  id: 'login',
  state: () => ({
    token: '',
    userInfo: {}
  }),
  getters: {},
  actions: {
    async accountLoginAction(payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      this.token = token
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfoResult = await userInfoRequest(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)
    },
    async phoneLoginAction(payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  }
})
