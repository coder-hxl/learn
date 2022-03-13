<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="content">
      <fh-table :listData="userList" :propList="propList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSystemStore } from '@/store'

import FhTable from '@/base-ui/table'

import pageSearch from '@/components/page-search'
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
    minWidth: '100'
  },
  {
    label: '创建时间',
    prop: 'createAt',
    minWidth: '250'
  },
  {
    label: '更新时间',
    prop: 'updateAt',
    minWidth: '250'
  }
]
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
