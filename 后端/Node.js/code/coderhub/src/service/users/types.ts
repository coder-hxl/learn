interface IUser {
  username: string
  password: string
  age?: number
}

interface IUsersService {
  create(user: IUser): Promise<string>
}

export { IUsersService }
