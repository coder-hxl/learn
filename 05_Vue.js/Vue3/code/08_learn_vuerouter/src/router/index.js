import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 导入组件
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

/* 
	配置映射关系：
		- path：路径
		- component：路径对应着的组件
		- redirect：用于做重定向，将根路径重定向到/home路径下
 */
const routes = [
	{ path: '/', redirect: '/home' },  
	{ path: '/home', component: Home },
	{ path: '/about', component: About }
]

// 创建一个路由对象router
const router = createRouter({
	// 传入配置好的映射关系
	routes,
	// 选择路由模式
	history: createWebHistory()
})

export default router