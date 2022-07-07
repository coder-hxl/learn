import type { Middleware } from 'koa'

interface IUserController {
  create: Middleware
}

interface IAuthController {
  login: Middleware
  success: Middleware
}

interface IMomentController {
  create: Middleware
  detail: Middleware
  list: Middleware
}

export { IUserController, IAuthController, IMomentController }
