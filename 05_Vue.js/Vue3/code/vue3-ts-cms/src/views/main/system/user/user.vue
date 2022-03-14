<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="content">
      <fh-table
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectionChange="contentTableConfig"
      >
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
          <div class="handle">
            <el-button size="small" type="text">
              <el-icon> <EditPen /></el-icon> 编辑
            </el-button>
            <el-button size="small" type="text">
              <el-icon><Delete /></el-icon> 删除
            </el-button>
          </div>
        </template>
      </fh-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSystemStore } from '@/store'

import pageSearch from '@/components/page-search'
import FhTable from '@/base-ui/table'

import { searchFormConfig } from './config/search.config'

const systemStore = useSystemStore()

systemStore.getPageListAction({
  pageUrl: 'users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const userList = computed(() => systemStore.userList)
const propList = [
  {
    label: '用户名',
    prop: 'name',
    minWidth: '100'
  },
  {
    label: '真实姓名',
    prop: 'realname',
    minWidth: '100'
  },
  {
    label: '手机号码',
    prop: 'cellphone',
    minWidth: '100'
  },
  {
    label: '状态',
    prop: 'enable',
    minWidth: '100',
    slotName: 'status'
  },
  {
    label: '创建时间',
    prop: 'createAt',
    minWidth: '250',
    slotName: 'createAt'
  },
  {
    label: '更新时间',
    prop: 'updateAt',
    minWidth: '250',
    slotName: 'updateAt'
  },
  {
    label: '操作',
    minWidth: '100',
    slotName: 'handle'
  }
]

const showIndexColumn = true
const showSelectColumn = true

const contentTableConfig = (value: any) => {
  console.log(value)
}
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
