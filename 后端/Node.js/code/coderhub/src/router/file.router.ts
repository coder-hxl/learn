import Router from '@koa/router'

import { fileController } from '@/controller'
import { verifyAuth } from '@/middleware/auth.middleware'
import { avatarHandler } from '@/middleware/file.middleware'

const fileRouter = new Router({ prefix: '/uploads' })

fileRouter.post(
  '/avatar',
  verifyAuth,
  avatarHandler,
  fileController.saveAvatarInfo
)

export default fileRouter
