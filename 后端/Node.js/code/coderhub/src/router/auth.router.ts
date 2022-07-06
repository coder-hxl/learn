import Router from '@koa/router'

import { authController } from '@/controller'
import { verifyLogin } from '@/middleware/auth.middleware'

const authRouter = new Router({ prefix: '/login' })

authRouter.post('/', verifyLogin, authController.login)

export default authRouter
