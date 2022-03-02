<template>
  <div class="nav-header">
    <el-icon>
      <component :is="icon" @click="changeIcon"></component>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

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
  height: 30px;
  .el-icon {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
