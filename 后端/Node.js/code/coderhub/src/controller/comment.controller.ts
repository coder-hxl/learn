import { commentService } from '@/service/index'

import { ICommentController } from './types'

const commentController: ICommentController = {
  async create(ctx, next) {
    const { id } = ctx.user
    const { content, momentId } = ctx.request.body

    const result = await commentService.create(content, momentId, id)

    ctx.body = result
  },
  async reply(ctx, next) {
    const { id } = ctx.user
    const { content, momentId, commentId } = ctx.request.body

    const result = await commentService.reply(content, momentId, id, commentId)

    ctx.body = result
  },
  async update(ctx, next) {
    const { commentId } = ctx.params
    const { content } = ctx.request.body

    const result = await commentService.update(content, commentId)

    ctx.body = result
  },
  async remove(ctx, next) {
    const { commentId } = ctx.params

    const result = await commentService.remove(commentId)

    ctx.body = result
  },
  async list(ctx, next) {
    const { momentId }: any = ctx.query

    const result = await commentService.getCommentByMomentId(momentId)

    ctx.body = result
  }
}

export default commentController
