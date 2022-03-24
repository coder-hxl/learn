<template>
  <div class="menu">
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
</script>

<style scoped></style>
