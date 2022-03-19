import { defineStore } from 'pinia'

import { getPageListData } from '@/service/main/system/system'

import { ISystemState } from './types'

export const useSystemStore = defineStore({
  id: 'system',
  state: (): ISystemState => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0
  }),
  getters: {
    pageListData(state: any) {
      return (pageName: string) => {
        return state[`${pageName}List`]
      }
    },
    pageListCount(state: any) {
      return (pageName: string) => {
        return state[`${pageName}Count`]
      }
    }
  },
  actions: {
    changeUsersList(list: any[]) {
      this.usersList = list
    },
    changeUsersCount(count: number) {
      this.usersCount = count
    },
    changeRoleList(list: any[]) {
      this.roleList = list
    },
    changeRoleCount(count: number) {
      this.roleCount = count
    },
    changeGoodsList(list: any[]) {
      this.goodsList = list
    },
    changeGoodsCount(count: number) {
      this.goodsCount = count
    },
    changeMenuList(list: any[]) {
      this.menuList = list
    },
    changeMenuCount(count: number) {
      this.menuCount = count
    },
    async getPageListAction(payload: any) {
      // 1.获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 2.在页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data

      // 3.将数据存储到state中
      switch (pageName) {
        case 'users':
          this.changeUsersList(list)
          this.changeUsersCount(totalCount)
          break
        case 'role':
          this.changeRoleList(list)
          this.changeRoleCount(totalCount)
          break
        case 'goods':
          this.changeGoodsList(list)
          this.changeGoodsCount(totalCount)
          break
        case 'menu':
          this.changeMenuList(list)
          this.changeMenuCount(totalCount)
          break
      }
    }
  }
})
