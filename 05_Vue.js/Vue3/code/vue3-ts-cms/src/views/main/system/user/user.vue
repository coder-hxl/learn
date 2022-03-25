<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :formData="formData"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

// pageModal相关的逻辑
const editCallback = () => {
  const password = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  password!.isHidden = true
}
const newCallback = () => {
  const password = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  password!.isHidden = false
}

const { pageModalRef, formData, handleEditData, handleNewData } = usePageModal(
  editCallback,
  newCallback
)
</script>

<style scoped lang="less"></style>
