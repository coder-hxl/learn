import { createApp } from 'vue'
import App from './04_teleport内置组件/App.vue'

import registerDirectives from './directives'
import pulginsObject from './pulgins/pulgins_object'
import pulginsFunction from './pulgins/pulgins_function'

const app =  createApp(App)

registerDirectives(app)

/* 
  向Vue全局添加一些功能，采用插件的模式，它有两种编写方式：
    - 对象类型：一个对象，里面必须包含一个 install 函数，该函数会在安装插件时执行；
    - 函数类型：一个函数，该函数会在安装插件时自动执行；

  插件可以完成的功能没有限制，比如：
    - 添加全局方法或者属性，通过把它们添加到 config.globalPropertes 上实现；
    - 添加全局资源：指令/过滤器/过渡等；
    - 通过全局 mixin 来添加一些组件选项；
    - 一个库，提供自己的API，同时提供上面提到的某些功能；

  安装插件：通过 组件实例.use(导入的插件) ，就会自动调用插件内的函数，并把组件实例当参数传给插件内的函数，安装就完成了；
  */
app.use(pulginsObject)
app.use(pulginsFunction)


// 注册全局指令：directive 方法
// app.directive('focus', {
// 	// 里面使用生命周期函数
// 	mounted(el, bindings, vnode, preVnode) {
// 		console.log('focus mounted');
// 		el.focus()
// 	},
// })

app.mount('#app')
