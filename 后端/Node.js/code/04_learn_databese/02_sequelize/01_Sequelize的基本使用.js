const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('coderhub', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then((res) => {
    console.log('连接成功~')
  })
  .catch((err) => {
    console.log('连接失败~')
  })
