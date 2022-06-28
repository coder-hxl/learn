const mysql = require('mysql2')

// 1.创建连接池
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'root',
  connectionLimit: 10
})

// 2.使用连接池
const statemen = `
SELECT * FROM products WHERE price > ? AND score > ?;
`

connections.execute(statemen, [6000, 7], (err, results) => {
  console.log(results);
})
