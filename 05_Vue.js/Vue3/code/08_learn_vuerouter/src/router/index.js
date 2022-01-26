import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 导入组件
// import Home from '../pages/home.vue'
// import About from '../pages/about.vue'

/* 
	配置映射关系
	route属性：
		- redirect：用于做重定向，将根路径重定向到指定的路径下；
		- path：路径；
		- name：路由记录独一无二的名称；
		- component：可以传入组件，也可以接收函数，但该函数必须返回一个promise;
		- meta：自定义数据；
 */
const routes = [
	{ 
	  path: '/', 
		redirect: '/home' 
	},  
	{ 
	  path: '/home', 
		name: 'home',
		// 使用懒加载方式，使用import()导入webpack会对其进行分包，传入 /* webpackChunkName: 包名 */ 可以对其自定义包名
		component: () => import(/* webpackChunkName: "home-chunk" */'../pages/home.vue'),
		meta: {
			name: 'fh',
			age: 17
		},
		// 路由嵌套配置
		children: [
			{
				path: '',
				redirect: '/home/message'
			},
			{
				path: 'message',
				component: () => import('../pages/homeMessage.vue')
			},
			{
				path: 'goods',
				component: () => import('../pages/homeGoods.vue')
			},
		]
	},
	{ 
	  path: '/about', 
		name: 'about',
		component: () => import('../pages/about.vue') 
	},
	{ 
		// 动态路由匹配
		// 匹配规则：通过 : 给一个路径参数，由路径决定:路径参数的值
	  path: '/user/:username/id/:id', 
		component: () => import('../pages/user.vue')
	},
	{
		// NotFound
		// 添加 /:pathMatch(.*) 对没有匹配到的路由，匹配到固定的某个页面
		path: '/:pathMatch(.*)', 
		component: () => import('../pages/NotFound.vue')
	},
	{
		path: '/login',
		component: () => import('../pages/Login.vue')
	}
]


// 创建一个路由对象router
const router = createRouter({
	// 传入配置映射关系
	routes,
	// 选择路由模式
	history: createWebHistory()
})


// 动态添加路由addRoute()
const categoryRoute = {
	path: '/category',
	component: () => import('../pages/Category.vue')
}

// 添加顶级路由
router.addRoute(categoryRoute)

// 添加二级路由，参数一是上一级路由name属性值，参数二是路由对象
router.addRoute('home', {
	path: 'moment',
	component: () => import('../pages/homeMoment.vue')
})


/* 
	动态删除路由
		- 添加一个name相同的路由，会覆盖掉原先的路由；
		- 通过removeRoute方法，传入路由的名称；
		- 通过addRoute方法的返回值回调；
 */
// router.removeRoute('about')


/* 
	导航守卫beforeEach
	其会在导航触发时会被回调：
		- 它有两个参数：
			  - to：即将进入的路由Route对象；
			  - from：即将离开的路由Route对象；
		- 返回值问题：
			  - false：不进行导航
			  - undefined或不写返回值：进行默认导航
			  - 字符串：路径，跳转到对应的路径中
		  	- 对象：类似于 router.push({path: '/login', query: ...})
 */
let counter = 0
router.beforeEach((to, from) => {
	console.log(`进行了${++counter}路由跳转`);
	// if (to.path.indexOf('/home') !== -1) {
	// 	return '/login'
	// }

	if (to.path !== '/login') {
		if (!window.localStorage.getItem('token')) {
			return 'login'
		}
	}
})

export default router