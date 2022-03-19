<template>
  <div class="menu">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search'

import pageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/use-page-search'

// 此页面无法根据检索获取列表
const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
</script>

<style scoped></style>
