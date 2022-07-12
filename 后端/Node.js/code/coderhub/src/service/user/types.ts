interface IUserInfo {
  name: string
  password: string
}

interface IUserService {
  create(userInfo: IUserInfo): any
  getUserByName(userName: string): any
  updateAvatarUrlById(avatarUrl: string, id: string): any
}

export { IUserService }
