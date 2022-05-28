import { DebuggerOptions, ReactiveEffect } from './effect'
import { Ref, trackRefValue, triggerRefValue } from './ref'
import { isFunction, NOOP } from '@vue/shared'
import { ReactiveFlags, toRaw } from './reactive'
import { Dep } from './dep'

declare const ComputedRefSymbol: unique symbol

export interface ComputedRef<T = any> extends WritableComputedRef<T> {
  readonly value: T
  [ComputedRefSymbol]: true
}

export interface WritableComputedRef<T> extends Ref<T> {
  readonly effect: ReactiveEffect<T>
}

export type ComputedGetter<T> = (...args: any[]) => T
export type ComputedSetter<T> = (v: T) => void

export interface WritableComputedOptions<T> {
  get: ComputedGetter<T>
  set: ComputedSetter<T>
}

export class ComputedRefImpl<T> {
  public dep?: Dep = undefined

  private _value!: T
  public readonly effect: ReactiveEffect<T>

  public readonly __v_isRef = true
  public readonly [ReactiveFlags.IS_READONLY]: boolean

  public _dirty = true
  public _cacheable: boolean

  constructor(
    getter: ComputedGetter<T>,
    private readonly _setter: ComputedSetter<T>,
    isReadonly: boolean,
    isSSR: boolean
  ) {
    // 创建一个ReactiveEffect实例对象
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        // 打开设置缓存开关, 下次调用就会重新缓存
        this._dirty = true
        // 对使用该computed.value进行触发
        triggerRefValue(this)
      }
    })
    // 对reactiveEffect类实例初始化
    this.effect.computed = this
    this.effect.active = this._cacheable = !isSSR
    this[ReactiveFlags.IS_READONLY] = isReadonly
  }

  get value() {
    // the computed ref may get wrapped by other proxies e.g. readonly() #3376
    const self = toRaw(this)
    // 对使用该computed.value进行跟踪
    trackRefValue(self)
    if (self._dirty || !self._cacheable) {
      // 关闭设置缓存开关, 下次调用就不会重新缓存
      self._dirty = false
      // 将值缓存
      self._value = self.effect.run()!
    }
    // 将缓存后的值返回出去
    return self._value
  }

  set value(newValue: T) {
    // 直接调用set操作函数
    this._setter(newValue)
  }
}

export function computed<T>(
  getter: ComputedGetter<T>,
  debugOptions?: DebuggerOptions
): ComputedRef<T>
export function computed<T>(
  options: WritableComputedOptions<T>,
  debugOptions?: DebuggerOptions
): WritableComputedRef<T>
export function computed<T>(
  getterOrOptions: ComputedGetter<T> | WritableComputedOptions<T>,
  debugOptions?: DebuggerOptions,
  isSSR = false
) {
  let getter: ComputedGetter<T>
  let setter: ComputedSetter<T>

  // 绑定getter/setter
  const onlyGetter = isFunction(getterOrOptions)
  if (onlyGetter) {
    // getterOrOptions为函数的处理方式
    getter = getterOrOptions
    setter = __DEV__
      ? () => {
          console.warn('Write operation failed: computed value is readonly')
        }
      : NOOP
  } else {
    // getterOrOptions为对象的处理方式, 取出get和set分别保存到getter/setter
    getter = getterOrOptions.get
    setter = getterOrOptions.set
  }

  // 创建一个compouted实例对象
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR)

  // 添加调试函数
  if (__DEV__ && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack
    cRef.effect.onTrigger = debugOptions.onTrigger
  }

  // 返回compoted实例对象
  return cRef as any
}
