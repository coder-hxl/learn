import { defineStore } from 'pinia'

import { getPageListData } from '@/service/main/list/list'

import { IRoleSate } from './types'

export const useRoleStore = defineStore({
  id: 'role',
  state: (): IRoleSate => ({
    roleList: []
  }),
  getters: {},
  actions: {
    changeRoleList(list: any[]) {
      this.roleList = list
    },
    async getEntireRole() {
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })

      const { list } = roleResult.data
      this.changeRoleList(list)
    }
  }
})
