import Router from '@koa/router'

import { labelController } from '@/controller'
import { verifyAuth } from '@/middleware/auth.middleware'

const labelRouter = new Router({ prefix: '/lables' })

labelRouter.post('/', verifyAuth, labelController.create)
labelRouter.get('/', labelController.list)

export default labelRouter
