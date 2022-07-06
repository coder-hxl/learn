import Koa from 'koa'
import koaBody from 'koa-body'

import useRoutes from '@/router'
import errorHandle from './error-handle'

import { IApp } from './app.types'

const app: IApp = new Koa()
app.useRoutes = useRoutes

app.use(koaBody())
app.useRoutes()

app.on('error', errorHandle)

export default app
