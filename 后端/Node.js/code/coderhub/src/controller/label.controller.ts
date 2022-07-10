import { labelService } from '@/service/index'

import { ILabelController } from './types'

const labelController: ILabelController = {
  async create(ctx, next) {
    const { name } = ctx.request.body

    const result = await labelService.create(name)

    ctx.body = result
  },
  async list(ctx, next) {
    const { limit, offset }: any = ctx.query

    const result = await labelService.getLabelList(limit, offset)

    ctx.body = result
  }
}

export default labelController
