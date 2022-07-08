import jwt from 'jsonwebtoken'

import { userService, authService } from '@/service'
import md5Password from '@/utils/passwordHandle'
import errorType from '@/constants/error-type'
import { PUBLIC_KEY } from '@/app/config'

import type { Middleware } from 'koa'

const verifyLogin: Middleware = async (ctx, next) => {
  // 1.获取用户名和密码
  const { name, password } = ctx.request.body

  // 2.判断用户名和密码是否为空
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 3.判断用户是否存在
  const result = await userService.getUserByName(name)
  const user = result[0]
  if (!user) {
    const error = new Error(errorType.USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 4.验证密码
  if (md5Password(password) !== user.password) {
    const error = new Error(errorType.PASSWORD_IS_INCORRENT)
    return ctx.app.emit('error', error, ctx)
  }

  ctx.user = user

  // 5.调用next
  await next()
}

const verifyAuth: Middleware = async (ctx, next) => {
  // 1.获取token
  const authorization = ctx.header.authorization
  const token = authorization?.replace('Bearer ', '') ?? ''

  // 2.验证token(id/name/iat/exp)
  try {
    const result = jwt.verify(token, PUBLIC_KEY, { algorithms: ['RS256'] })
    ctx.user = result
    await next()
  } catch {
    const error = new Error(errorType.UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

/**
 * 1.很多的内容都需要验证权限: 修改/删除动态, 修改/删除评论
 * 2.接口: 业务接口系统/后台管理系统
 *   一对一: user -> role
 *   多对多: role -> menu(删除动态/修改动态)
 */
const verifyPermission: Middleware = async (ctx, next) => {
  const resourceKey = Object.keys(ctx.params)[0]

  const tableName = resourceKey.replace('Id', 's')
  const resourceId = ctx.params[resourceKey]
  const { id } = ctx.user

  // 验证权限
  const result: boolean = await authService.checkResource(
    tableName,
    resourceId,
    id
  )
  if (!result) {
    const error = new Error(errorType.NOT_PERMISSION)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

export { verifyLogin, verifyAuth, verifyPermission }
