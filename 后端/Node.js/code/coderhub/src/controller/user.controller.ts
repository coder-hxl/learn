import { userService } from '@/service/index'

import { IUserController } from './types'

const userController: IUserController = {
  async create(ctx, next) {
    // 1.拿到内容
    const userInfo = ctx.request.body

    // 2.创建用户
    const result = await userService.create(userInfo)

    // 3.返回结果
    ctx.body = result
  }
}

export default userController
