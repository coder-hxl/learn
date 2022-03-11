import { defineStore, StateTree } from 'pinia'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import router from '@/router'

import localCache from '@/utils/cache'
import { mapMenusToRouter } from '@/utils/map-menus'

import { ILoginState, IloginActions } from './types'

export function loadLocalLogin() {
  const loginStore = useLoginStore()

  const token = localCache.getCache('token')
  token && loginStore.setToken(token, false)

  const userInfo = localCache.getCache('userInfo')
  userInfo && loginStore.setUserInfo(userInfo, false)

  const userMenus = localCache.getCache('userMenus')
  userMenus && loginStore.setUserMenus(userMenus, false)
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
    setToken(token, storeLocal = true) {
      this.token = token
      storeLocal && localCache.setCache('token', token)
    },
    setUserInfo(userInfo, storeLocal = true) {
      this.userInfo = userInfo
      storeLocal && localCache.setCache('userInfo', userInfo)
    },
    setUserMenus(userMenus, storeLocal = true) {
      this.userMenus = userMenus
      storeLocal && localCache.setCache('userMenus', userMenus)

      // userMenus => routes
      const routes = mapMenusToRouter(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    },
    async accountLoginAction(payload) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      this.setToken(token)

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      this.setUserInfo(userInfo)

      // 3.请求用户菜单
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      this.setUserMenus(userMenus)

      // 4.跳转到首页
      router.push('/main')
    },
    async phoneLoginAction(payload) {
      console.log('执行phoneLoginAction', payload)
    }
  }
})
