<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="label">
            <el-icon><user-filled /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="label">
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox label="记住密码" v-model="isKeepPassword" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleloginClick"
      >立刻登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

const isKeepPassword = ref(true)

const accountRef = ref<InstanceType<typeof LoginAccount>>()

const handleloginClick = () => {
  accountRef.value?.loginAction(isKeepPassword.value)
}
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 340px;
  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
