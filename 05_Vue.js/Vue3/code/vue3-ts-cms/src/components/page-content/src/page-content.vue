<template>
  <div class="page-content">
    <fh-table :listData="listData" v-bind="contentTableConfig">
      <!-- 1.header中的插槽 -->
      <template #headerHandle>
        <el-button type="primary">新增用户</el-button>
      </template>

      <!-- 2.列表中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启动' : '禁止' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filter.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle>
        <div class="handle-btns">
          <el-button size="small" type="text">
            <el-icon><EditPen /></el-icon> 编辑
          </el-button>
          <el-button size="small" type="text">
            <el-icon><Delete /></el-icon> 删除
          </el-button>
        </div>
      </template>
    </fh-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSystemStore } from '@/store'

import FhTable from '@/base-ui/table'

const prop = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const systemStore = useSystemStore()

systemStore.getPageListAction({
  pageName: prop.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const listData = computed(() => systemStore.getList(prop.pageName))
</script>

<style scoped lang="less">
.page-content {
  padding: 22px;
  border-top: 20px solid #f0f2f5;

  .el-icon {
    margin-right: 4px;
  }
}
</style>
