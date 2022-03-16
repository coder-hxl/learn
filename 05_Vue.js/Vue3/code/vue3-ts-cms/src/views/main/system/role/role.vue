<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>

    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
</script>

<style scoped lang="less"></style>
