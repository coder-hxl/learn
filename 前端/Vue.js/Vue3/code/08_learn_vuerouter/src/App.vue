<template>
  <div>
    <!-- 使用路由是通过<router-link>和<router-view>这两个内置组件 -->

    <!-- 
      <router-link>添加指定的路径，其属性：
        - to：一个字符串或一个对象  
        - replace：添加 replace 属性的话，当点击时，会调用 router.replace()，而不是 router.push()  
        - active-class：设置激活a元素后应用的class，默认是router-link-active
        - exact-active-class：连接精准激活时，应用于渲染的a元素的class，默认是router-link-exact-active
        - v-slot：作用域插槽来获取内部传给我们的值
        - custom：自定义整个元素
     -->

    <!-- props: href跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive是否当前处在活跃的状态 -->
    <!-- props: isExactActive是否当前处在精确的活跃状态 -->
    <router-link to="/home" v-slot="props" custom>
      <button @click="props.navigate">{{ props.href }}</button>
      <button @click="props.navigate">哈哈哈</button>
      <span :class="{ active: props.isActive }">{{ props.isActive }}</span>
      <span :class="{ active: props.isExactActive }">{{
        props.isExactActive
      }}</span>
      <!-- <p>{{props.route}}</p> -->
    </router-link>

    <router-link to="/about">关于</router-link>
    <router-link to="/user/fh/id/1">用户</router-link>
    <router-link to="/category">分类</router-link>

    <!-- 页面的跳转 -->
    <button @click="jumpToAbout">关于</button>
    <!-- 页面的前进后退 -->
    <button @click="forwardOneStep">前进一步</button>

    <!-- <router-view>根据路径渲染对应着的内容 -->
    <!-- props: Component要渲染的组件 -->
    <!-- props: route解析出的标准化路由对象 -->
    <router-view v-slot="props">
      <transition name="fh">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import NavBar from './compoents/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
    // jumpToAbout() {
    //   this.$router.push('/about')
    // }
  },
  setup() {
    const router = useRouter()

    const jumpToAbout = () => {
      // router的push和replace都可以传入一个字符串或一个对象

      // router.push('/about')
      // router.push({
      //   path: '/about',
      //   // query用于传递参数
      //   query: {
      //     name: 'fh',
      //     age: 17
      //   }
      // })

      router.replace('/about')
    }

    const forwardOneStep = () => {
      // 前进一步
      router.go(1)

      // router.forward()
      // router.back()
    }

    return {
      jumpToAbout,
      forwardOneStep
    }
  }
}
</script>

<style>
.fh-active {
  color: red;
}

.fh-enter-from,
.fh-leave-to {
  opacity: 0;
}

.fh-enter-active,
.fh-leave-active {
  transition: all 1s ease;
}
</style>
