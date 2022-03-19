<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>

    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      ref="pageContentRef"
    >
      <template #oldPrice="scope">
        <span>¥{{ scope.row.oldPrice }}</span>
      </template>
      <template #newPrice="scope">
        <span>¥{{ scope.row.newPrice }}</span>
      </template>
      <template #img="scope">
        <el-image
          style="width: 55px; height: 55px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        />
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

import { usePageSearch } from '@/hooks/use-page-search'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
</script>

<style scoped lang="less"></style>
