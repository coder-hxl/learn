import Koa from 'koa'
import koaBody from 'koa-body'

import { usersRouter } from '@/router'

const app = new Koa()

app.use(koaBody())
app.use(usersRouter.routes())

export default app
