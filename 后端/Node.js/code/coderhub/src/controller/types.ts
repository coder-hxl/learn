import type { Middleware } from 'koa'

interface IUserController {
  create: Middleware
}

export { IUserController }
