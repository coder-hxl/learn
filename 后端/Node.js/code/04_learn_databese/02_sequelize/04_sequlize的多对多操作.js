const { Sequelize, DataTypes, Model } = require('sequelize')

const sequelize = new Sequelize('coderhub', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

// Student
class Student extends Model {}
Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: DataTypes.INTEGER
  },
  {
    tableName: 'students',
    createdAt: false,
    updatedAt: false,
    sequelize
  }
)

// Course
class Course extends Model {}
Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: DataTypes.DOUBLE
  },
  {
    tableName: 'courses',
    createdAt: false,
    updatedAt: false,
    sequelize
  }
)

// StudentCourse
class StudentCourse extends Model {}
StudentCourse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: {
      field: 'students_id',
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: 'id'
      }
    },
    courseId: {
      field: 'courses_id',
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: 'id'
      }
    }
  },
  {
    tableName: 'students_select_courses',
    createdAt: false,
    updatedAt: false,
    sequelize
  }
)

// 多对多关系的联系
Student.belongsToMany(Course, {
  through: StudentCourse,
  foreignKey: 'studentId',
  otherKey: 'courseId'
})

Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: 'courseId',
  otherKey: 'studentId'
})

async function queryProducts() {
  const result = await Student.findAll({
    include: {
      model: Course
    }
  })
  console.log(result)
}

queryProducts()
