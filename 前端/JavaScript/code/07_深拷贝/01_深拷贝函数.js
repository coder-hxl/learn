function isObject(value) {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

function deepClone(originValue) {
  if (Array.isArray(originValue)) {
    // 数组类型
    return originValue.map((item) => deepClone(item))
  } else if (typeof originValue === 'function') {
    // 函数类型
    return originValue
  } else if (typeof originValue === 'symbol') {
    // Symbol类型
    return Symbol(originValue.description)
  } else if (originValue instanceof Set) {
    // Set类型
    return new Set([...originValue])
  } else if (originValue instanceof Map) {
    // Map类型
    return new Map([...originValue])
  } else if (!isObject(originValue)) {
    // 其他类型
    return originValue
  }

  // 处理对象类型
  const newObject = {}
  for (const key in originValue) {
    if (originValue[key] === originValue) {
      newObject[key] = newObject
    } else {
      newObject[key] = deepClone(originValue[key])
    }
  }

  // 处理key为Symbol类型
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for (const key of symbolKeys) {
    newObject[key] = deepClone(originValue[key])
  }

  return newObject
}

// 测试代码
const s1 = Symbol('s1')
const s2 = Symbol('s2')

const obj = {
  name: 'coderhxl',
  age: 18,
  friend: {
    name: 'coderwhy',
    age: 18
  },
  hobbies: [{}, 'cba', 'nba'],
  foo() {
    console.log('foo')
  },
  [s1]: 's1',
  s2: s2,
  set: new Set(['a', 'b', 'c']),
  map: new Map([
    ['aa', 'cc'],
    ['bb', 'cc']
  ])
}

obj.info = obj

const newObj = deepClone(obj)

// console.log(obj === newObj)
// console.log(obj.friend === newObj.friend)
// console.log(obj.hobbies === newObj.hobbies)
// console.log(obj.hobbies[0] === newObj.hobbies[0])
// console.log(newObj[s1])
// console.log(obj.s2 === newObj.s2)
// console.log(obj.set === newObj.set)
// console.log(obj.map === newObj.map)
console.log(newObj.info.info.info)
