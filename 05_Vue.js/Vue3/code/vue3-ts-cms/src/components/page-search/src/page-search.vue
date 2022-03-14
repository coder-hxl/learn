<template>
  <div class="page-search">
    <fh-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button size="large">
            <el-icon>
              <Refresh />
            </el-icon>
            重置</el-button
          >
          <el-button type="primary" size="large">
            <el-icon>
              <Search />
            </el-icon>
            搜索</el-button
          >
        </div>
      </template>
    </fh-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { FhForm } from '@/base-ui/form'

defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped lang="less">
.page-search {
  .header {
    color: red;
  }

  .handle-btns {
    text-align: right;
    padding: 0 50px 20px 0;
  }

  .el-icon {
    margin-right: 4px;
  }
}
</style>
