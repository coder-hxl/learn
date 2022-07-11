import { userService } from '@/service'
import md5Password from '@/utils/passwordHandle'

import errorType from '@/constants/error-type'

import type { Middleware } from '@koa/router'

const verifyUser: Middleware = async (ctx, next) => {
  // 1.获取用户名和密码
  const { name, password } = ctx.request.body

  // 2.判断用户名和密码不能为空
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 3.判断用户名是否已被注册
  const result = await userService.getUserByName(name)
  if (result.length) {
    const error = new Error(errorType.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 4.调用 next
  await next()
}

const handlePassword: Middleware = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5Password(password)

  await next()
}

export { verifyUser, handlePassword }
