import Router from '@koa/router'

import { fileController } from '@/controller'
import { verifyAuth } from '@/middleware/auth.middleware'
import {
  avatarHandler,
  verifyAvatarExists,
  pictureHandler,
  pictureResize
} from '@/middleware/file.middleware'

const fileRouter = new Router({ prefix: '/uploads' })

fileRouter.post(
  '/avatar',
  verifyAuth,
  avatarHandler,
  verifyAvatarExists,
  fileController.saveAvatarInfo
)

fileRouter.post(
  '/picture',
  verifyAuth,
  pictureHandler,
  pictureResize,
  fileController.savePictureInfo
)

export default fileRouter
