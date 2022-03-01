import fhRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  accountLogin = '/login',
  loginUserInfo = '/users/',
  userMenu = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return fhRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.accountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return fhRequest.get<IDataType>({
    url: LoginAPI.loginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId(id: number) {
  return fhRequest.get<IDataType>({
    url: LoginAPI.userMenu + id + '/menu',
    showLoading: false,
    interceptors: {
      responseInterceptor(config) {
        // 对服务器返回的data里的icon进行截取, 原因: 此版本element-plus的icon改版了
        for (const item of config.data) {
          item.icon = item.icon.slice(8)
        }
        return config
      }
    }
  })
}
