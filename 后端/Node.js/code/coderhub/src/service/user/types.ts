interface IUserInfo {
  name: string
  password: string
}

interface IUserService {
  create(userInfo: IUserInfo): Promise<any>
  getUserByName(userName: string): Promise<any>
}

export { IUserService }
