import { IAccount } from '@/service/login/type'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

interface IloginActions {
  changeToken(token: string, storeLocal?: boolean): void
  changeUserInfo(userInfo: any, storeLocal?: boolean): void
  changeUserMenus(userMenus: any, storeLocal?: boolean): void
  loadLocalLogin(): void
  accountLoginAction(payload: IAccount): void
  phoneLoginAction(payload: any): void
}

export { ILoginState, IloginActions }
