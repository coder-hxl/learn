import { customRef } from 'vue'

/* 
	customRef自定义ref，并对其依赖项跟踪和更新触发进行显示控制
		- 它需要一个工厂函数，该函数接收 track 和 trigger 函数作为参数；
		- 并且应该返回一个带有 get 和 set 的对象；
 */

export default function(value, delay = 300) {
	let timer = null
	return customRef((track, trigger) => {
		return {
			get() {
				// track收集依赖
				track()
				return value
			},
			set(newValue) {
				clearTimeout(timer)
				timer =  setTimeout(() => {
					value = newValue
					// trigger更新依赖
					trigger()
				}, delay);
			}
		}
	})
}