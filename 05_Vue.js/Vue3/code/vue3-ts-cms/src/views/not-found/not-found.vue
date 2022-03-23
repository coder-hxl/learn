<template>
  <div class="notFound">
    <img class="img" src="@/assets/img/not-found.svg" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.notFound {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    width: 60%;
    height: auto;
  }
}
</style>
