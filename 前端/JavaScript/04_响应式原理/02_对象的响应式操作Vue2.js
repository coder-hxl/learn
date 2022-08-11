let actionEffect = null

const weakMapEffect = new WeakMap()

function trackEffect(target, key) {
  let map = weakMapEffect.get(target)
  if (!map) {
    weakMapEffect.set(target, (map = new Map()))
  }

  let dep = map.get(key)
  if (!dep) {
    map.set(key, (dep = new Set()))
  }

  actionEffect && dep.add(actionEffect)
}

function triggerEffect(target, key) {
  let map = weakMapEffect.get(target)
  let dep = map.get(key)

  for (const effect of dep) {
    effect()
  }
}

function watchEffect(callback) {
  actionEffect = callback
  callback()
  actionEffect = null
}

function reactive(target) {
  for (const key of Object.keys(target)) {
    let value = target[key]
    Object.defineProperty(target, key, {
      get() {
        trackEffect(target, key)
        return value
      },
      set(newValue) {
        value = newValue
        triggerEffect(target, key)
      }
    })
  }
  return target
}

const obj = reactive({
  name: 'coderhxl',
  age: 18
})

const obj2 = reactive({
  name: 'coder',
  age: 18
})

watchEffect(() => {
  console.log(`watchEffect1: ${obj.name}`)
})

watchEffect(() => {
  console.log(`watchEffect2: ${obj.age}`)
})

watchEffect(() => {
  console.log(`watchEffect3: ${obj2.name}`)
})

obj.name = 'hxl'
