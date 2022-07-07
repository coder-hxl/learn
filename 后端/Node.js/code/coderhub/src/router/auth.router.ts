import Router from '@koa/router'

import { authController } from '@/controller'
import { verifyLogin, verifyAuth } from '@/middleware/auth.middleware'

const authRouter = new Router()

authRouter.post('/login', verifyLogin, authController.login)
authRouter.get('/test', verifyAuth, authController.success)

export default authRouter
