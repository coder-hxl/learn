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
    goodsCount: 0
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
    changeUsersList(usersList: any[]) {
      this.usersList = usersList
    },
    changeUsersCount(usersCount: number) {
      this.usersCount = usersCount
    },
    changeRoleList(roleList: any[]) {
      this.roleList = roleList
    },
    changeRoleCount(roleCount: number) {
      this.roleCount = roleCount
    },
    changeGoodsList(goodsList: any[]) {
      this.goodsList = goodsList
    },
    changeGoodsCount(goodsCount: number) {
      this.goodsCount = goodsCount
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
      }
    }
  }
})
