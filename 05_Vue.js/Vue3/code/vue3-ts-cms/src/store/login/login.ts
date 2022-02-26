import { defineStore, StateTree } from 'pinia'

import { ILoginState, IloginActions } from './type'

export const useLoginStore = defineStore<
  string,
  ILoginState,
  StateTree,
  IloginActions
>({
  id: 'login',
  state: () => ({
    token: '',
    userInfo: {}
  }),
  getters: {},
  actions: {
    accountLoginAction(payload: any) {
      console.log('执行accountLoginAction', payload)
    },
    phoneLoginAction(payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  }
})
