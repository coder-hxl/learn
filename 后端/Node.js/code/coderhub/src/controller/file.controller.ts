import { fileService, userService } from '@/service'

import { APP_HOST, APP_PORT } from '@/app/config'

import { IFileController } from './types'

import type { File } from '@koa/multer'

const fileController: IFileController = {
  async saveAvatarInfo(ctx, next) {
    // 1.获取图像信息
    const { filename, mimetype, size } = ctx.request.file
    const { id, hasOldAvatar } = ctx.user

    // 2.将图像信息保存到数据库中
    if (hasOldAvatar) {
      await fileService.updateAvatarById(filename, mimetype, size, id)
    } else {
      await fileService.createAvatar(filename, mimetype, size, id)
    }

    // 3.添加图像url到用户表中
    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`
    await userService.updateAvatarUrlById(avatarUrl, id)

    // 3.返回结果
    ctx.body = `头像上传成功~`
  },
  async savePictureInfo(ctx, next) {
    const files = ctx.request.files as unknown as File[]
    const { momentId } = ctx.query as any
    const { id } = ctx.user

    for (const file of files) {
      const { filename, mimetype, size } = file
      await fileService.createfile(filename, mimetype, size, momentId, id)
    }

    ctx.body = '动态配图上传完成~'
  }
}

export default fileController
