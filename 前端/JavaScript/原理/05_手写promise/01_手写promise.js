const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    resolve(execFn(value))
  } catch (err) {
    reject(err)
  }
}

function executeResolve(result, promises, resolve) {
  if (result.length === promises.length) {
    return resolve(result)
  }
}

class XLPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = (value) => {
      // 添加微任务
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PENDING) {
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach((fn) => fn())
        }
      })
    }

    const reject = (reason) => {
      // 添加微任务
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PENDING) {
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach((fn) => fn(this.reason))
        }
      })
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled || ((res) => res)

    onRejected =
      onRejected ||
      ((err) => {
        throw err
      })

    return new XLPromise((resolve, reject) => {
      // 1.状态已经确定, 直接执行
      if (this.status === PROMISE_STATUS_FULFILLED) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      }

      if (this.status === PROMISE_STATUS_REJECTED) {
        execFunctionWithCatchError(onRejected, this.value, resolve, reject)
      }

      // 2.状态未确定, 放入数组中回调
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        })

        this.onRejectedFns.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  filally(onRejected) {
    return this.then(onRejected, onRejected)
  }

  static resolve(value) {
    return new Promise((resolve) => resolve(value))
  }

  static reject(reason) {
    return new Promise((_, reject) => reject(reason))
  }

  static all(promises) {
    return new XLPromise((resolve, reject) => {
      const values = []

      promises.forEach((promise) => {
        if (promise instanceof XLPromise) {
          promise.then((res) => {
            values.push(res)
            executeResolve(values, promises, resolve)
          }, reject)
        } else {
          XLPromise.resolve(promise).then((res) => {
            values.push(res)
            executeResolve(values, promises, resolve)
          })
        }
      })
    })
  }

  static allSettled(promises) {
    return new XLPromise((resolve) => {
      const result = []

      promises.forEach((promise) => {
        if (promise instanceof XLPromise) {
          promise.then(
            (res) => {
              result.push({ status: PROMISE_STATUS_FULFILLED, value: res })
              executeResolve(result, promises, resolve)
            },
            (err) => {
              result.push({ status: PROMISE_STATUS_REJECTED, value: err })
              executeResolve(result, promises, resolve)
            }
          )
        } else {
          XLPromise.resolve(promise).then((res) => {
            result.push({ status: PROMISE_STATUS_FULFILLED, value: res })
            executeResolve(result, promises, resolve)
          })
        }
      })
    })
  }

  static race(promises) {
    return new XLPromise((resolve, reject) => {
      promises.forEach((promise) => {
        if (promise instanceof XLPromise) {
          promise.then(resolve, reject)
        } else {
          XLPromise.resolve(promise).then(resolve)
        }
      })
    })
  }

  static any(promises) {
    return new XLPromise((resolve, reject) => {
      const reasons = []

      promises.forEach((promise) => {
        if (promise instanceof XLPromise) {
          promise.then(resolve, (err) => {
            reasons.push(err)
            if (reasons.length === promises.length) {
              reject(new AggregateError(reasons))
            }
          })
        } else {
          XLPromise.resolve(promise).then(resolve)
        }
      })
    })
  }
}

const p1 = new XLPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1111)
    reject('aaa')
  }, 2000)
})

const p2 = new XLPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(222)
    reject('bbbb')
  }, 3000)
})

const p3 = new XLPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(333)
    reject('cccc')
  }, 1000)
})

XLPromise.any([p1, p2, p3])
  .then((res) => {
    console.log('res:', res)
  })
  .catch((err) => {
    console.log('err:', err.errors)
  })
