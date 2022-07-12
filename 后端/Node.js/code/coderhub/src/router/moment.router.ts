import Router from '@koa/router'

import { momentController } from '@/controller'
import { verifyAuth, verifyPermission } from '@/middleware/auth.middleware'
import { verifyLabelExists } from '@/middleware/label.middeware'

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

// 添加标签
momentRouter.post(
  '/:momentId/labels',
  verifyAuth,
  verifyPermission,
  verifyLabelExists,
  momentController.addLabels
)

// 获取动态图像
momentRouter.get('/images/:filename', momentController.fileInfo)

export default momentRouter
