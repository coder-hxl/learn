import pool from '@/app/database'
import { IFileService } from './types'

const fileService: IFileService = {
  async createAvatar(filename, mimetype, size, userId) {
    const statement = `INSERT INTO avatars (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);`

    const [result] = await pool.execute(statement, [
      filename,
      mimetype,
      size,
      userId
    ])

    return result
  },
  async getAvatarById(id) {
    const statement = `SELECT * FROM avatars WHERE user_id = ?;`

    const [result]: any = await pool.execute(statement, [id])

    return result[0]
  },
  async updateAvatarById(filename, mimetype, size, userId) {
    const statement =
      'UPDATE avatars SET filename = ?, mimetype = ?, size = ? WHERE user_id = ?;'

    const [result] = await pool.execute(statement, [
      filename,
      mimetype,
      size,
      userId
    ])

    return result
  },
  async createfile(filename, mimetype, size, momentId, userId) {
    const statement = `INSERT INTO files (filename, mimetype, size, moment_id, user_id) VALUES (?, ?, ?, ?, ?)`

    const [result] = await pool.execute(statement, [
      filename,
      mimetype,
      size,
      momentId,
      userId
    ])

    return result
  },
  async getFileByFilename(filename) {
    const statement = `SELECT * FROM files WHERE filename = ?;`

    const [result]: any = await pool.execute(statement, [filename])

    return result[0]
  }
}

export default fileService
