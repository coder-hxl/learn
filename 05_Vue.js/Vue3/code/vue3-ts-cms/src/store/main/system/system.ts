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
    userList: [],
    userCount: 0
  }),
  getters: {},
  actions: {
    changeUserList(userList) {
      this.userList = userList
    },
    changeUserCount(userCount) {
      this.userCount = userCount
    },
    async getPageListAction(payload) {
      // 1.在页面发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data
      this.changeUserList(list)
      this.changeUserCount(totalCount)
    }
  }
})
