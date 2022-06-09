function debounce(fn, delay, immediate = false, resultCallback) {
  let timer = null
  let isImmediate = false

  function _debounce(...args) {
    return new Promise((resolve) => {
      // 取消上次定时器
      if (timer) clearTimeout(timer)

      if (immediate && !isImmediate) {
        // 立即执行
        const result = fn.apply(this, args)
        if (resultCallback) resultCallback(result)
        resolve(result)
        isImmediate = true
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          if (resultCallback) resultCallback(result)
          resolve(result)
          timer = null
          isImmediate = false
        }, delay)
      }
    })
  }

  // 清除
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
  }

  return _debounce
}
