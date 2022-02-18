<template>
  <div class="app">
    <h2>{{ userStore.name }}</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>

    <router-view></router-view>

    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-input></el-input>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from './store/modules/user'

const userStore = useUserStore()
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
