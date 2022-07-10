import { labelService } from '@/service/index'

import type { Middleware } from 'koa'

type label = {
  id?: number
  name: string
}

const verifyLabelExists: Middleware = async (ctx, next) => {
  // 1.取出要添加的标签
  const { labels } = ctx.request.body

  // 2.判断标签是否存在
  const newlabels: label[] = []
  for (const name of labels) {
    const labelResult: any = await labelService.getLabelByName(name)
    const label: label = { name }

    if (!labelResult) {
      // 创建标签
      const result: any = await labelService.create(name)
      label.id = result.insertId
    } else {
      label.id = labelResult.id
    }
    newlabels.push(label)
  }
  ctx.labels = newlabels

  await next()
}

export { verifyLabelExists }
