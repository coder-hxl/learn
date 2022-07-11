import pool from '@/app/database'

import { IMomentService } from './types'

const momentService: IMomentService = {
  async create(userId, content) {
    const statement = `INSERT INTO moments (content, user_id) VALUES (?, ?);`
    const [result] = await pool.execute(statement, [content, userId])

    return result
  },
  async getMomentById(momentId) {
    const statement = `
      SELECT
        m.id id, m.content content, m.createAt createaTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name, 'avatarUrl', u.avatar_url) author,
      	IF(COUNT(l.id), JSON_ARRAYAGG(
      	  JSON_OBJECT('id', l.id, 'name', l.name)
      	), NULL) labels,
      	(SELECT
      	  IF(COUNT(c.id), JSON_ARRAYAGG(
      			JSON_OBJECT(
      				'id', c.id, 'content', c.content, 'commentId', c.comment_id,'createTime', c.createAt, 'updateTime', c.updateAt,
      				'author', JSON_OBJECT('id', cu.id, 'name', cu.name, 'avatarUrl', cu.avatar_url)
      			)
      		), NULL)
      	FROM comments c LEFT JOIN users cu ON cu.id = c.user_id
        WHERE c.moment_id = m.id
      	) comments
      FROM moments m
      LEFT JOIN users u ON m.user_id = u.id
      LEFT JOIN moments_labels ml ON ml.moment_id = m.id
      LEFT JOIN labels l ON l.id = ml.label_id
      WHERE m.id = ?;
    `

    const [result]: any = await pool.execute(statement, [momentId])

    return result[0]
  },
  async getMomentList(offset, size) {
    const statement = `
      SELECT
        m.id id, m.content content, m.createAt createaTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) author,
      	(SELECT COUNT(*) FROM comments c WHERE c.moment_id = m.id) comments,
        (SELECT COUNT(*) FROM moments_labels ml WHERE ml.moment_id = m.id)labels
      FROM moments m
      LEFT JOIN users u ON m.user_id = u.id
      LIMIT ?, ?;
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
    const statement = 'DELETE FROM moments WHERE id = ?;'

    console.log(momentId)

    const [result] = await pool.execute(statement, [momentId])

    return result
  },
  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moments_labels WHERE moment_id = ? AND label_id = ?;`

    const [result]: any = await pool.execute(statement, [momentId, labelId])

    return result.length ? true : false
  },
  async addLabels(momentId, labelId) {
    const statement = `INSERT INTO moments_labels (moment_id, label_id) VALUES (?, ?);`

    const [result] = await pool.execute(statement, [momentId, labelId])

    return result
  }
}

export default momentService
