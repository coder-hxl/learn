import { defineStore, StateTree } from 'pinia'

import { getPageListData } from '@/service/main/system/system'

import { ISystemState, ISystemActions } from './types'

export const useSystemStore = defineStore<
  string,
  ISystemState,
  StateTree,
  ISystemActions
>({
  id: 'system',
  state: () => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0
  }),
  getters: {
    getList(state: any) {
      return function (pageName: string) {
        return state[`${pageName}List`]
      }
    }
  },
  actions: {
    changeUsersList(usersList) {
      this.usersList = usersList
    },
    changeUsersCount(usersCount) {
      this.usersCount = usersCount
    },
    changeRoleList(roleList) {
      this.roleList = roleList
    },
    changeRoleCount(roleCount) {
      this.roleCount = roleCount
    },
    async getPageListAction(payload) {
      // 1.获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 2.在页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data

      // 3.将结果存储到state中
      switch (pageName) {
        case 'users':
          this.changeUsersList(list)
          this.changeUsersCount(totalCount)
          break
        case 'role':
          this.changeRoleList(list)
          this.changeRoleCount(totalCount)
          break
      }
    }
  }
})
