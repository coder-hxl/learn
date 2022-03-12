<template>
  <div class="user">
    <fh-form v-bind="searchFormConfig" v-model="formData" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FhForm } from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped></style>
