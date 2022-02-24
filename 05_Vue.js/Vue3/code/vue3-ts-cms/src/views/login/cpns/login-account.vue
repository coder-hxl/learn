<template>
  <div class="login-account">
    <el-form label-width="65px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { rules } from './config/rules-config'

const account = reactive({
  name: '',
  password: ''
})
</script>

<style scoped lang="less"></style>
