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
    width: 50%;
    height: auto;
    margin-bottom: 150px;
  }
}
</style>
