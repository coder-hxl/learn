import errorType from '@/constants/error-type'

import type { ParameterizedContext } from 'koa'

const errorHandle = (error: Error, ctx: ParameterizedContext) => {
  let status: number, message: string

  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 // bad request
      message = '账号或密码不能为空~'
      break

    case errorType.USER_ALREADY_EXISTS:
      status = 409 // coflict
      message = '用户名已存在~'
      break

    default:
      status = 404
      message = 'NOT FOUND~'
      break
  }

  ctx.status = status
  ctx.body = message
}

export default errorHandle
