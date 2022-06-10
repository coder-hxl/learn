function isObject(value) {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

function deepClone(originValue) {
  // 其他类型
  if (originValue instanceof Set) {
    return new Set([...originValue])
  } else if (originValue instanceof Map) {
    return new Map([...originValue])
  } else if (originValue instanceof Symbol) {
    return Symbol(originValue.description)
  } else if (typeof originValue === 'function') {
    return originValue
  } else if (!isObject(originValue)) {
    return originValue
  }

  // 处理对象类型或数组类型
  const newObject = Array.isArray(originValue) ? [] : {}
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
  hobbies: ['abc', 'cba', 'nba'],
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

const newObject = deepClone(obj)

// console.log(obj === newObject)
// console.log(obj.friend === newObject.friend)
console.log(newObject.info.info.info)
