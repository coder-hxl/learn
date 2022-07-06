import type { Middleware } from 'koa'

interface IUserController {
  create: Middleware
}

interface IAuthController {
  login: Middleware
}

export { IUserController, IAuthController }
