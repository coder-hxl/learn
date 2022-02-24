<template>
  <div class="login-account">
    <el-form label-width="65px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="phoneNum">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="phoneCode">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { rules } from './config/rules-config'

const phone = reactive({
  num: '',
  code: ''
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
