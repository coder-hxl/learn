<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #oldPrice="scope">
        <span>¥{{ scope.row.oldPrice }}</span>
      </template>
      <template #newPrice="scope">
        <span>¥{{ scope.row.newPrice }}</span>
      </template>
      <template #img="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        />
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
</script>

<style scoped></style>
