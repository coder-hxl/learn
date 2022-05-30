let actionEffect = null

const weakMapEffect = new WeakMap()

function track(target, key) {
  let map = weakMapEffect.get(target)
  if (!map) {
    weakMapEffect.set(target, (map = new Map()))
  }

  let dep = map.get(key)
  if (!dep) {
    map.set(key, (dep = new Set()))
  }

  trackEffect(dep)
}

function trackEffect(dep) {
  actionEffect && dep.add(actionEffect)
}

function trigger(target, key) {
  let map = weakMapEffect.get(target)
  let dep = map?.get(key)

  triggerEffect(dep)
}

function triggerEffect(dep) {
  if (dep) {
    for (const effect of dep) {
      effect()
    }
  }
}

function watchEffect(callback) {
  actionEffect = callback
  callback()
  actionEffect = null
}

function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      track(target, key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      trigger(target, key)
    }
  })
}

class Ref {
  constructor(target) {
    this.dep = new Set()

    typeof target === 'object'
      ? (this._value = reactive(target))
      : (this._value = target)
  }

  get value() {
    trackEffect(this.dep)
    return this._value
  }

  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue
      triggerEffect(this.dep)
    }
  }
}

function ref(target) {
  return new Ref(target)
}

const obj = reactive({
  name: 'coderhxl',
  age: 18
})

const obj2 = ref({
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
  console.log(`watchEffect3: ${obj2.value.name}`)
})

obj.name = 'hxl'

obj2.value.name = '哈哈哈'
