interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

interface IloginActions {
  setToken(token: string): void
  setUserInfo(userInfo: any): void
  setUserMenus(userMenus: any): void
  accountLoginAction(payload: any): void
  phoneLoginAction(payload: any): void
}

export { ILoginState, IloginActions }
