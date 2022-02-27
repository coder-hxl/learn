import fhRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  accountLogin = '/login',
  LoginUserInfo = '/users/'
}

export function accountLoginRequest(account: IAccount) {
  return fhRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.accountLogin,
    data: account
  })
}

export function userInfoRequest(id: number) {
  return fhRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}
