import { usersService } from '@/service/index'

import { IUsersController } from '../types'

const usersController: IUsersController = {
  async create(ctx, next) {
    // 1.处理
    const user = ctx.request.body

    // 2.查询
    const result = await usersService.create(user)

    // 3.返回结果
    ctx.body = result
  }
}

export default usersController
