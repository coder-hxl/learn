import pool from '@/app/database'

import { IUserService } from './types'

const userService: IUserService = {
  async create(userInfo) {
    const { name, password } = userInfo
    const statement = `INSERT INTO users (name, password) VALUES (?, ?);`
    const result = await pool.execute(statement, [name, password])

    return result[0]
  },

  async getUserByName(userName) {
    const statement = `SELECT * FROM users WHERE name = ?`
    const result = await pool.execute(statement, [userName])

    return result[0]
  },
  async getAvatarById(id) {
    const statement = `SELECT * FROM avatars WHERE user_id = ?;`

    const [result]: any = await pool.execute(statement, [id])

    return result[0]
  },
  async updateAvatarUrlById(avatarUrl, id) {
    const statement = 'UPDATE users SET avatar_url = ? WHERE id = ?;'

    const [result] = await pool.execute(statement, [avatarUrl, id])

    return result
  }
}

export default userService
