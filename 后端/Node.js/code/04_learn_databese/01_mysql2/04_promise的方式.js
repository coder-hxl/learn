const mysql = require('mysql2')

const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'root',
  connectionLimit: 10
})

const statemen = `
SELECT * FROM products WHERE price > ? AND score > ?;
`

connections.promise().execute(statemen, [6000, 7]).then((result) => {
  console.log(result);
}).catch(err => {
  console.log(err);
})
