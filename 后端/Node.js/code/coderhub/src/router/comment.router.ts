import Router from '@koa/router'

import { commentController } from '@/controller'
import { verifyAuth, verifyPermission } from '@/middleware/auth.middleware'

const commentRouter = new Router({ prefix: '/comments' })

commentRouter.post('/', verifyAuth, commentController.create)
commentRouter.post('/:commentId/reply', verifyAuth, commentController.reply)

commentRouter.patch(
  '/:commentId',
  verifyAuth,
  verifyPermission,
  commentController.update
)
commentRouter.delete(
  '/:commentId',
  verifyAuth,
  verifyPermission,
  commentController.remove
)

export default commentRouter
