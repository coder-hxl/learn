const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'root'
})

const statemen = `
SELECT * FROM products WHERE price > ? AND score > ?;
`
connection.execute(statemen, [6000, 6], (err, results) => {
  console.log(results);
})
