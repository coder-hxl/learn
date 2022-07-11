import type { Middleware } from '@koa/router'

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
  addLabels: Middleware
}

interface ICommentController {
  create: Middleware
  reply: Middleware
  update: Middleware
  remove: Middleware
  list: Middleware
}

interface ILabelController {
  create: Middleware
  list: Middleware
}

export {
  IUserController,
  IAuthController,
  IMomentController,
  ICommentController,
  ILabelController
}
