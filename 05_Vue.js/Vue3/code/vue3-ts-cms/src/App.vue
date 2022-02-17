<template>
  <div class="app">
    <h2>{{ store.name }}</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useStore } from './store'
const store = useStore()
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
