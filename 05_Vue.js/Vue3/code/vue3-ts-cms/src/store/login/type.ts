interface ILoginState {
  token: string
  userInfo: any
}

interface IloginActions {
  accountLoginAction(payload: any): void
  phoneLoginAction(payload: any): void
}

export { ILoginState, IloginActions }
