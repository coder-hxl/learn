import pool from '@/app/database'

import { ILabelService } from './type'

const labelService: ILabelService = {
  async create(name) {
    const statement = `INSERT INTO labels (name) VALUES (?);`

    const [result] = await pool.execute(statement, [name])

    return result
  },
  async getLabelByName(name) {
    const statement = `SELECT * FROM labels WHERE name = ?;`

    const [result]: any = await pool.execute(statement, [name])

    return result[0]
  },
  async getLabelList(limit, offset) {
    const statement = `SELECT * FROM labels LIMIT ?, ?`

    const [result] = await pool.execute(statement, [offset, limit])

    return result
  }
}

export default labelService
