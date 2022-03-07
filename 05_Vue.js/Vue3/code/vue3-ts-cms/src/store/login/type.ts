import { IAccount } from '@/service/login/type'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

interface IloginActions {
  setToken(token: string, storeLocal?: boolean): void
  setUserInfo(userInfo: any, storeLocal?: boolean): void
  setUserMenus(userMenus: any, storeLocal?: boolean): void
  accountLoginAction(payload: IAccount): void
  phoneLoginAction(payload: any): void
}

export { ILoginState, IloginActions }
