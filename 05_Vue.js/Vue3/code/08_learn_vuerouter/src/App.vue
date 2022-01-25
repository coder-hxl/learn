<template>
  <div>
    <!-- 
      使用路由是通过<router-link>和<router-view>这两个内置组件
        
        <router-link>添加指定的路径，其属性：
          - to：
            - 一个字符串或一个对象；

          - replace：
            - 添加 replace 属性的话，当点击时，会调用 router.replace()，而不是 router.push()；

          - active-class：
            - 设置激活a元素后应用的class，默认是router-link-active；

          - exact-active-class：
            - 连接精准激活时，应用于渲染的a元素的class，默认是router-link-exact-active；
        

        <router-view>根据路径渲染对应着的内容
     -->
    
    <router-link to='/home' active-class="fh-active">首页</router-link>
    <router-link to='/about' active-class="fh-active">关于</router-link>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  .fh-active {
    color: red;
  }
</style>
