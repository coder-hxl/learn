const mysql = require('mysql2')

// 1.创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'root'
})

// 2.执行 MySQL 语句
const statemen = `
SELECT * FROM products WHERE price > 6000;
`

connection.query(statemen, (err, res, fieds) => {
  console.log(res);
})
