import { fileService, userService } from '@/service'

import { APP_HOST, APP_PORT } from '@/app/config'

import { IFileController } from './types'

const fileController: IFileController = {
  async saveAvatarInfo(ctx, next) {
    // 1.获取图像信息
    const { filename, mimetype, size } = ctx.request.file
    const { id } = ctx.user

    // 2.将图像信息保存到数据库中
    const result = await fileService.createAvatar(filename, mimetype, size, id)

    // 3.添加图像url到用户表中

    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`
    const userResult = await userService.updateAvatarUrlById(avatarUrl, id)

    // 3.返回结果
    ctx.body = `头像上传成功~`
  }
}

export default fileController
