<template>
  <div class="user">
    <fh-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { FhForm } from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
</script>

<style scoped></style>
