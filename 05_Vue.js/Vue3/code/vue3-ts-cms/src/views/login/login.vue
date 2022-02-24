<template>
  <div class="login">
    <LoginPhone />
  </div>
</template>

<script setup lang="ts">
import LoginPhone from './cpns/login-panel.vue'
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('../.././assets/img/login-bg.svg');
}
</style>
