import { defineStore } from 'pinia'

import { getPageListData } from '@/service/main/list/list'

import { IDepartmentsSate } from './types'

export const useDepartmentsStore = defineStore({
  id: 'departments',
  state: (): IDepartmentsSate => ({
    entireDepartmentList: []
  }),
  getters: {},
  actions: {
    changeDepartmentList(list: any[]) {
      this.entireDepartmentList = list
    },
    async getEntireDepartments() {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })

      const { list } = departmentResult.data
      this.changeDepartmentList(list)
    }
  }
})
