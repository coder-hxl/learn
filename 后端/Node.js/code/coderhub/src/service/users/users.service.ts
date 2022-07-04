import { IUsersService } from './types'

const usersService: IUsersService = {
  async create(user) {
    console.log('将用户保存到数据库中:', user)

    return `用户创建成功~`
  }
}

export default usersService
