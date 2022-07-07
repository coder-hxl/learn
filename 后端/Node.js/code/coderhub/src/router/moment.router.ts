import Router from '@koa/router'

import { momentController } from '@/controller'
import { verifyAuth } from '@/middleware/auth.middleware'

const momentRouter = new Router({ prefix: '/moments' })

momentRouter.post('/', verifyAuth, momentController.create)
momentRouter.get('/', momentController.list)
momentRouter.get('/:momentId', momentController.detail)

export default momentRouter
