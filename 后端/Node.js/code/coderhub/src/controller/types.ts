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
  update: Middleware
  remove: Middleware
}

interface ICommentController {
  create: Middleware
  reply: Middleware
  update: Middleware
  remove: Middleware
}

export {
  IUserController,
  IAuthController,
  IMomentController,
  ICommentController
}
