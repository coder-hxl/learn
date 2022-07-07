interface IUserInfo {
  name: string
  password: string
}

interface IUserService {
  create(userInfo: IUserInfo): any
  getUserByName(userName: string): any
}

export { IUserService }
