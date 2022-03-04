import { defineStore, StateTree } from 'pinia'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenusToRouter } from '@/utils/map-menus'
import router from '@/router'

import { IAccount } from '@/service/login/type'
import { ILoginState, IloginActions } from './type'

export function loadLocalLogin() {
  const loginStore = useLoginStore()

  const token = localCache.getCache('token')
  token && loginStore.setToken(token)

  const userInfo = localCache.getCache('userInfo')
  userInfo && loginStore.setUserInfo(userInfo)

  const userMenus = localCache.getCache('userMenus')
  userMenus && loginStore.setUserMenus(userMenus)
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
    setToken(token: string) {
      this.token = token
      localCache.setCache('token', token)
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)
    },
    setUserMenus(userMenus: any) {
      this.userMenus = userMenus
      localCache.setCache('userMenus', userMenus)

      // userMenus => routes
      const routes = mapMenusToRouter(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    },
    async accountLoginAction(payload: IAccount) {
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
    async phoneLoginAction(payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  }
})
