<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      destroy-on-close
      center
    >
      <div>
        <fh-form v-bind="modalConfig" v-model="formItems"></fh-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">确定</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            取消
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { FhForm } from '@/base-ui/form'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  formData: {
    type: Object,
    default: () => ({})
  }
})

const dialogVisible = ref(false)
const formItems = ref<any>({})

watch(
  () => props.formData,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formItems.value[item.field] = newValue[item.field]
    }
  }
)

defineExpose({
  dialogVisible
})
</script>

<style scoped lang="less"></style>
