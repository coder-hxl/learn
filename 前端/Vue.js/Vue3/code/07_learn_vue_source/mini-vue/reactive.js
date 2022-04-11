class Dep {
  constructor() {
    this.subscribers = new Set()
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }

  notify() {
    this.subscribers.forEach((effect) => {
      effect()
    })
  }
}

let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

// Map({key: value})：key是一个字符串
// WeakMap({key(对象): value})：key是一个对象，弱引用
const targetMap = new WeakMap()
function getDep(target, key) {
  // 1.根据对象(target)取到对应的Map对象
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  // 2.根据key在depsMap取到具体的dep
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }

  return dep
}

// vue3对raw进行数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key)
      dep.depend()
      return target[key]
    },
    set(target, key, newValue) {
      if (target[key] !== newValue) {
        const dep = getDep(target, key)
        target[key] = newValue
        dep.notify()
      }
    }
  })
}

// 测试代码
// const info = reactive({counter: 100, name: 'fh'})
// const foo = reactive({hieght: 1.88})

// // watchEffect1
// watchEffect(function() {
// 	console.log('effct1：', info.counter * 2, info.name);
// })

// // watchEffect2
// watchEffect(function() {
// 	console.log('effct2：', info.counter * info.counter);
// })

// // watchEffect3
// watchEffect(function() {
// 	console.log('effct3：', info.counter + 10, info.name);
// })

// // watchEffect4
// watchEffect(function() {
// 	console.log('effct4：', foo.hieght);
// })

// info.counter++
// info.name = ' 浮幻'

// foo.hieght = 2
