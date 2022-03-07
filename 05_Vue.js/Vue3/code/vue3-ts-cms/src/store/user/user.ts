import { defineStore } from 'pinia'

import { IUserState } from './type'

export const useUserStore = defineStore<string, IUserState>({
  id: 'user',
  state: () => ({
    name: '浮幻',
    age: 18
  }),
  getters: {},
  actions: {}
})
