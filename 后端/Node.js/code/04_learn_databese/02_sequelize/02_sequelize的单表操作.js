const { Sequelize, DataTypes, Model, Op } = require('sequelize')

const sequelize = new Sequelize('coderhub', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DOUBLE
  },
  {
    tableName: 'products',
    createdAt: false,
    updatedAt: false,
    sequelize
  }
)

async function queryProducts() {
  // 1.查询数据库中products表的所有内容
  // const result = await Product.findAll({
  //   where: {
  //     price: {
  //       [Op.gte]: 6000
  //     }
  //   }
  // })
  // console.log(result)

  // 2.插入数据
  // const result = await Product.create({
  //   title: '小米10s',
  //   price: 3999,
  //   score: 6.5
  // })
  // console.log(result)

  // // 3.更新数据
  // const result = await Product.update(
  //   { score: '6.6' },
  //   {
  //     where: {
  //       id: 109
  //     }
  //   }
  // )

  // console.log(result)

  // 4.删除数据
  const result = await Product.destroy({
    where: {
      id: 110
    }
  })

  console.log(result)
}

queryProducts()
