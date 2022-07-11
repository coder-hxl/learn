import fs from 'node:fs'

import { userService } from '@/service'

import { AVATAR_PATH } from '@/constants/file-path'

import { IUserController } from './types'

const userController: IUserController = {
  async create(ctx, next) {
    // 1.拿到内容
    const userInfo = ctx.request.body

    // 2.创建用户
    const result = await userService.create(userInfo)

    // 3.返回结果
    ctx.body = result
  },
  async avatarInfo(ctx, next) {
    // 1.获取id
    const { userId } = ctx.params

    // 2.通过id获取头像信息
    const result = await userService.getAvatarById(userId)

    // 3.返回内容
    ctx.response.set('Content-Type', result.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${result.filename}`)
  }
}

export default userController
