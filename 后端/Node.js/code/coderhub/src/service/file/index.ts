import pool from '@/app/database'
import { IFileService } from './types'

const fileService: IFileService = {
  async createAvatar(filename, mimetype, size, userId) {
    const statement = `INSERT INTO avatars (filename, mimetype, size, user_Id) VALUES (?, ?, ?, ?)`

    const [result] = await pool.execute(statement, [
      filename,
      mimetype,
      size,
      userId
    ])

    return result
  }
}

export default fileService
