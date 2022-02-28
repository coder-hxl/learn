import { defineStore, StateTree } from 'pinia'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'

import { IAccount } from '@/service/login/type'
import { ILoginState, IloginActions } from './type'

export function loadLocalLogin() {
  const loginStore = useLoginStore()

  const token = localCache.getCache('token')
  token && (loginStore.token = token)

  const userInfo = localCache.getCache('userInfo')
  userInfo && (loginStore.userInfo = userInfo)

  const userMenus = localCache.getCache('userMenus')
  userMenus && (loginStore.userMenus = userMenus)
}

export const useLoginStore = defineStore<
  string,
  ILoginState,
  StateTree,
  IloginActions
>({
  id: 'login',
  state: () => ({
    token: '',
    userInfo: {},
    userMenus: []
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
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      this.userMenus = userMenus
      localCache.setCache('userMenus', userMenus)

      // 4.跳转到首页
      router.push('/main')
    },
    async phoneLoginAction(payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  }
})
