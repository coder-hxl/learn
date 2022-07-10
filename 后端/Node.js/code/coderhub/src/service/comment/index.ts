import pool from '@/app/database'

import { ICommentService } from './types'

const commentService: ICommentService = {
  async create(content, momentId, userId) {
    const statement = `INSERT INTO comments (content, moment_id, user_id) VALUES (?, ?, ?);`

    const [result] = await pool.execute(statement, [content, momentId, userId])

    return result
  },
  async reply(content, momentId, userId, commentId) {
    const statement = `INSERT INTO comments (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`

    const [result] = await pool.execute(statement, [
      content,
      momentId,
      userId,
      commentId
    ])

    return result
  },
  async update(content, id) {
    const statement = `UPDATE comments SET content = ? WHERE id = ?;`

    const [result] = await pool.execute(statement, [content, id])

    return result
  },
  async remove(id) {
    const statement = `DELETE FROM comments WHERE id = ?`

    const [result] = await pool.execute(statement, [id])

    return result
  },
  async getCommentByMomentId(momentId) {
    const statement = `
      SELECT
        c.id, c.content, c.moment_id momentId,c.createAt createTime, c.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) author
      FROM comments c
      LEFT JOIN users u ON u.id = c.user_id
      WHERE c.moment_id = ?;
    `

    const [result] = await pool.execute(statement, [momentId])

    return result
  }
}

export default commentService
