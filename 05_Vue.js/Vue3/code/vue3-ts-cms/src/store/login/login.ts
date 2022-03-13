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
    changeToken(token) {
      this.token = token
    },
    changeUserInfo(userInfo) {
      this.userInfo = userInfo
    },
    changeUserMenus(userMenus) {
      this.userMenus = userMenus

      // userMenus => routes
      const routes = mapMenusToRouter(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    },
    loadLocalLogin() {
      // 将本地缓存的用户数据保存到state中
      const token = localCache.getCache('token')
      token && this.changeToken(token)

      const userInfo = localCache.getCache('userInfo')
      userInfo && this.changeUserInfo(userInfo)

      const userMenus = localCache.getCache('userMenus')
      userMenus && this.changeUserMenus(userMenus)
    },
    async accountLoginAction(payload) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      this.changeToken(token)
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      this.changeUserInfo(userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      this.changeUserMenus(userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳转到首页
      router.push('/main')
    },
    async phoneLoginAction(payload) {
      console.log('执行phoneLoginAction', payload)
    }
  }
})
