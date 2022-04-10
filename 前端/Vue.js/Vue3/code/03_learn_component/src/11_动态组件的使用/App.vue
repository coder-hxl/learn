<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab == item }"
    >
      {{ item }}
    </button>

    <!-- 2.动态组件 -->
    <!-- 内置组件component：<component :is="组件名"></component>，默认情况下，切换组件时会销毁掉原先的组件 -->
    <!-- 
			内置组件keep-alive：保留组件的状态，而不是销毁
			keep-alive属性：
				- include：只有名称匹配的组件会被缓存，跟组件对象的name属性进行匹配
				- exclude：任何名称匹配的组件都不会被缓存
				- max：最多可以缓存多少组件实例，一旦到达数字，那么缓存组件中最迟没有被访问的实例会销毁掉
		-->
    <keep-alive include="home,about">
      <component
        :is="currentTab"
        name="fh"
        :age="17"
        @pageClick="pageClick"
      ></component>
    </keep-alive>

    <!-- 1.v-if的判断实现 -->
    <!-- <template v-if="currentTab == 'home'">
			<home></home>
		</template>
		<template v-else-if="currentTab == 'about'">
			<about></about>
		</template>
		<template v-else>
			<category></category>
		</template> -->
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'

export default {
  components: {
    Home,
    About,
    Category
  },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      currentTab: 'home'
    }
  },
  methods: {
    itemClick(item) {
      this.currentTab = item
    },
    pageClick() {
      console.log('page内部发生点击')
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>
