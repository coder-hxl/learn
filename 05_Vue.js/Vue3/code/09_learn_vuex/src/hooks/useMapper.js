import { computed } from 'vue'
import { useStore } from 'vuex'

export function useMapper(mapper, mapFn) {
  // 拿到store对象
  const store = useStore()

  // 获取到对应的对象的function：{name: function, age: function}
  const storeMapFns = mapFn(mapper)

  // 对数据进行转换
  const storeMap = {}
  Object.keys(storeMapFns).forEach(fnKey => {
    const fn = storeMapFns[fnKey].bind({ $store: store })
    storeMap[fnKey] = computed(fn)
  })

  return storeMap
}