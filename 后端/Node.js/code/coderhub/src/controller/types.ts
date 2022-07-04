import type Application from 'koa'

interface IUsersController {
  create(
    ctx: Application.ParameterizedContext,
    next: Application.Next
  ): Promise<void>
}

export { IUsersController }
