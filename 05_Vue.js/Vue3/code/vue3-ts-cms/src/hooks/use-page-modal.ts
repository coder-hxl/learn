import { ref } from 'vue'

import pageModal from '@/components/page-modal'

type callbackFn = () => void

export function usePageModal(editCb?: callbackFn, newCb?: callbackFn) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const formData = ref({})

  const handleEditData = (item: any) => {
    formData.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }
  const handleNewData = () => {
    formData.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }

  return { pageModalRef, formData, handleEditData, handleNewData }
}
