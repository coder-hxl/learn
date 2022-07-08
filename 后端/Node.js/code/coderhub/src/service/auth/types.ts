import { numAndStr } from '../types'

interface IAuthService {
  checkResource(
    tableName: string,
    resourceId: numAndStr,
    userId: numAndStr
  ): any
}

export { IAuthService }
