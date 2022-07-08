import pool from '@/app/database'

import { IMomentService } from './types'

const sqlFragment = `
  SELECT
    m.id id, m.content content, m.createAt createaTime, m.updateAt updateTime,
    JSON_OBJECT('id', u.id, 'name', u.name) author
  FROM moments m
  LEFT JOIN users u ON m.user_id = u.id
`

const momentService: IMomentService = {
  async create(userId, content) {
    const statement = `INSERT INTO moments (content, user_id) VALUES (?, ?);`
    const [result] = await pool.execute(statement, [content, userId])

    return result
  },
  async getMomentById(momentId) {
    const statement = `
      ${sqlFragment}
      WHERE m.id = ?;
    `

    const [result]: any = await pool.execute(statement, [momentId])

    return result[0]
  },
  async getMomentList(offset, size) {
    const statement = `
      ${sqlFragment}
      LIMIT ?, ?
    `

    const [result] = await pool.execute(statement, [offset, size])

    return result
  },
  async update(momentId, content) {
    const statement = `UPDATE moments SET content = ? WHERE id = ?;`

    const [result] = await pool.execute(statement, [content, momentId])

    return result
  },
  async remove(momentId) {
    const statement = 'DELETE FROM moments where id = ?'

    const [result] = await pool.execute(statement, [momentId])

    return result
  }
}

export default momentService
