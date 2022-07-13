import fs from 'node:fs/promises'
import path from 'node:path'

import multer from '@koa/multer'
import jimp from 'jimp'

import { fileService } from '@/service'
import { AVATAR_PATH, PICTURE_PATH } from '@/constants/file-path'

import type { Middleware as RMiddleware } from '@koa/router'
import type { File } from '@koa/multer'

const avatarUpload = multer({ dest: AVATAR_PATH })
const avatarHandler = avatarUpload.single('avatar')

const verifyAvatarExists: RMiddleware = async (ctx, next) => {
  const { id } = ctx.user

  // 处理旧的头像
  const oldAvatar = await fileService.getAvatarById(id)
  if (oldAvatar) {
    ctx.user.hasOldAvatar = true
    await fs.unlink(`${AVATAR_PATH}/${oldAvatar.filename}`)
  }

  await next()
}

const pictureUpload = multer({ dest: PICTURE_PATH })
const pictureHandler = pictureUpload.array('picture', 9)

const pictureResize: RMiddleware = async (ctx, next) => {
  // 1.获取图像信息
  const files = ctx.request.files as unknown as File[]

  // 2.对图像进行处理
  for (const file of files) {
    const destPath = path.join(file.destination, file.filename)
    jimp.read(destPath).then((image) => {
      image.resize(1280, jimp.AUTO).write(`${destPath}-large`)
      image.resize(640, jimp.AUTO).write(`${destPath}-middle`)
      image.resize(320, jimp.AUTO).write(`${destPath}-small`)
    })
  }

  await next()
}

export {
  avatarHandler,
  verifyAvatarExists,
  pictureUpload,
  pictureHandler,
  pictureResize
}
