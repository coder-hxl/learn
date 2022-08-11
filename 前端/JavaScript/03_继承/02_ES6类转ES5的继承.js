// class Parent {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   running() {
//     console.log('running~')
//   }
//   static staticMethod() {}
// }

// class Student extends Parent {
//   constructor(name, age, score) {
//     super(name, age)
//     this.score = score
//   }
//   studying() {
//     console.log('studying~')
//   }
// }

// babel转换后的代码
'use strict'

function _typeof(obj) {
  '@babel/helpers - typeof'
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj
          }),
    _typeof(obj)
  )
}

// 继承方法
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }
  // 1.继承prototype
  // subClass.prototype设置为一个新的实例对象
  // Object.create返回一个新的实例对象, 内部通过new构造函数创建出来的, 构造函数prototype设置为superClass.prototype
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  })
  Object.defineProperty(subClass, 'prototype', { writable: false })
  // 2.继承静态方法
  // 将subClass的[[Prototype]]设置成superClass本身
  if (superClass) _setPrototypeOf(subClass, superClass)
}

// 继承静态方法
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p
        return o
      }
  return _setPrototypeOf(o, p)
}

// 继承属性
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct()
  return function _createSuperInternal() {
    // 获取父构造函数, 继承方法时已经将子构造函数的[[prototype]]设置成父构造函数
    var Super = _getPrototypeOf(Derived),
      result
    if (hasNativeReflectConstruct) {
      // 获取原型对象上的constructor, 也就是子构造函数
      var NewTarget = _getPrototypeOf(this).constructor
      result = Reflect.construct(Super, arguments, NewTarget)
    } else {
      result = Super.apply(this, arguments)
    }
    return _possibleConstructorReturn(this, result)
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call
  } else if (call !== void 0) {
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    )
  }
  return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false
  if (Reflect.construct.sham) return false
  if (typeof Proxy === 'function') return true
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    )
    return true
  } catch (e) {
    return false
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

// 进行遍历绑定
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

// 处理构造函数的方法
function _createClass(Constructor, protoProps, staticProps) {
  // 构造函数prototype对象绑定protoProps普通方法
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  // 构造函数本身绑定staticProps静态方法
  if (staticProps) _defineProperties(Constructor, staticProps)
  Object.defineProperty(Constructor, 'prototype', { writable: false })
  return Constructor
}

// 类转构造函数
var Parent = /*#__PURE__*/ (function () {
  function Parent(name, age) {
    _classCallCheck(this, Parent)

    this.name = name
    this.age = age
  }

  // 处理构造函数的方法
  _createClass(
    Parent,
    [
      {
        key: 'running',
        value: function running() {
          console.log('running~')
        }
      }
    ],
    [
      {
        key: 'staticMethod',
        value: function staticMethod() {}
      }
    ]
  )

  return Parent
})()

var Student = /*#__PURE__*/ (function (_Parent) {
  // 继承Parent方法
  _inherits(Student, _Parent)

  var _super = _createSuper(Student)

  function Student(name, age, score) {
    var _this

    _classCallCheck(this, Student)

    // 创建出来的对象: {name: , age: }
    _this = _super.call(this, name, age)
    // 绑定自身属性: {name: , age: , score: }
    _this.score = score
    return _this
  }

  _createClass(Student, [
    {
      key: 'studying',
      value: function studying() {
        console.log('studying~')
      }
    }
  ])

  return Student
})(Parent)

const stu = new Student('hxl', 18, 666)
console.log(stu)
console.log(stu.name)
stu.studying()
stu.running()
