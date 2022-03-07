<template>
  <div>
    <h2>home</h2>
    <ul>
      <li>内容1</li>
      <li>内容2</li>
      <li>内容3</li>
      <li>内容4</li>
      <li>内容5</li>
    </ul>

    <router-link to='/home/message'>消息</router-link>
    <router-link to='/home/goods'>货物</router-link>
    <router-link to='moment'>动态</router-link>

    <router-view />

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>