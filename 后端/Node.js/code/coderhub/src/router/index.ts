import fs from 'node:fs'

import type Router from '@koa/router'
import { IApp } from '@/app/app.types'

function useRoutes(this: IApp) {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'index.ts') return

    const router: Router = require(`./${file}`).default
    this.use(router.routes())
    this.use(router.allowedMethods())
  })
}

export default useRoutes
