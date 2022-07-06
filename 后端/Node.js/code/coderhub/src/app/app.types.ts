import type Application from 'koa'

interface IApp extends Application {
  useRoutes?: (this: IApp) => void
}

export { IApp }
