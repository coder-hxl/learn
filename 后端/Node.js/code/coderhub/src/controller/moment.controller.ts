import { momentService } from '@/service'

import { IMomentController } from './types'

const momentController: IMomentController = {
  async create(ctx, next) {
    // 1.获取参数
    const userId = ctx.user.id
    const { content } = ctx.request.body

    // 2.创建内容
    const result = await momentService.create(userId, content)

    ctx.body = result
  },
  async detail(ctx, next) {
    const momentId = ctx.params.momentId

    // 获取单条内容
    const result = await momentService.getMomentById(momentId)

    ctx.body = result
  },
  async list(ctx, next) {
    const { offset, size } = ctx.query

    // 获取内容列表
    const result = await momentService.getMomentList(
      offset as string,
      size as string
    )

    ctx.body = result
  },
  async update(ctx, next) {
    const { momentId } = ctx.params
    const { content } = ctx.request.body

    // 更新内容
    const result = await momentService.update(momentId, content)

    ctx.body = result
  },
  async remove(ctx, next) {
    const { momentId } = ctx.params

    const result = await momentService.remove(momentId)

    ctx.body = result
  }
}

export default momentController
