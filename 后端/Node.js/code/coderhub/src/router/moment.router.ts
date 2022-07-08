import Router from '@koa/router'

import { momentController } from '@/controller'
import { verifyAuth, verifyPermission } from '@/middleware/auth.middleware'

const momentRouter = new Router({ prefix: '/moments' })

momentRouter.post('/', verifyAuth, momentController.create)
momentRouter.get('/', momentController.list)
momentRouter.get('/:momentId', momentController.detail)

// 1.用户必须登录 2.用户具备权限
momentRouter.patch(
  '/:momentId',
  verifyAuth,
  verifyPermission,
  momentController.update
)
momentRouter.delete(
  '/:momentId',
  verifyAuth,
  verifyPermission,
  momentController.remove
)

export default momentRouter
