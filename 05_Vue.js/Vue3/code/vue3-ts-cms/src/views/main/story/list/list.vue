<template>
  <div class="list">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
</script>

<style scoped lang="less"></style>
