import mysql from 'mysql2'

import config from './config'

const pool = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT as unknown as number,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE
})

pool.getConnection((err) => {
  if (err) {
    console.log('数据库连接失败:', err)
  } else {
    console.log('数据库连接成功~')
  }
})

export default pool.promise()
