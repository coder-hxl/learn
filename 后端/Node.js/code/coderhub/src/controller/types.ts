import type { Middleware as RMiddleware } from '@koa/router'

interface IUserController {
  create: RMiddleware
  avatarInfo: RMiddleware
}

interface IAuthController {
  login: RMiddleware
  success: RMiddleware
}

interface IMomentController {
  create: RMiddleware
  detail: RMiddleware
  list: RMiddleware
  update: RMiddleware
  remove: RMiddleware
  addLabels: RMiddleware
  fileInfo: RMiddleware
}

interface ICommentController {
  create: RMiddleware
  reply: RMiddleware
  update: RMiddleware
  remove: RMiddleware
  list: RMiddleware
}

interface ILabelController {
  create: RMiddleware
  list: RMiddleware
}

interface IFileController {
  saveAvatarInfo: RMiddleware
  savePictureInfo: RMiddleware
}

export {
  IUserController,
  IAuthController,
  IMomentController,
  ICommentController,
  ILabelController,
  IFileController
}
