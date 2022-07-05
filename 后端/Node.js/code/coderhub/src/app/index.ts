import Koa from 'koa'
import koaBody from 'koa-body'

import { userRouter } from '@/router'
import errorHandle from './error-handle'

const app = new Koa()

app.use(koaBody())
app.use(userRouter.routes())

app.on('error', errorHandle)

export default app
