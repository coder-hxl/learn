import { momentService } from '@/service'

import { IMomentController } from './types'

const momentController: IMomentController = {
  async create(ctx, next) {
    const userId = ctx.user.id
    const { content } = ctx.request.body

    const result = await momentService.create(userId, content)

    ctx.body = result
  },
  async detail(ctx, next) {
    const momentId = ctx.params.momentId

    const result = await momentService.getMomentById(momentId)

    ctx.body = result
  },
  async list(ctx, next) {
    const { offset, size } = ctx.query

    const result = await momentService.getMomentList(
      offset as string,
      size as string
    )

    ctx.body = result
  }
}

export default momentController
