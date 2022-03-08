<template>
  <div class="nav-header">
    <el-icon>
      <component :is="icon" @click="changeIcon"></component>
    </el-icon>
    <div class="content">
      <span>面包屑</span>
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import userInfo from './cpns/user-info.vue'

let isFold = false
const icon = ref('Expand')
const emit = defineEmits(['foldChange'])

const changeIcon = () => {
  isFold = !isFold
  if (isFold) {
    icon.value = 'Fold'
  } else {
    icon.value = 'Expand'
  }

  emit('foldChange', isFold)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  height: 30px;

  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .el-icon {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
