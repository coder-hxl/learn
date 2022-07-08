import pool from '@/app/database'

import { IAuthService } from './types'

const authService: IAuthService = {
  async checkResource(tableName, resourceId, userId) {
    const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`

    const [result]: any = await pool.execute(statement, [resourceId, userId])

    return result.length ? true : false
  }
}

export default authService
