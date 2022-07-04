import Router from '@koa/router'

import { usersController } from '@/controller'

const usersRouter = new Router({ prefix: '/users' })

usersRouter.post('/', usersController.create)

export default usersRouter
