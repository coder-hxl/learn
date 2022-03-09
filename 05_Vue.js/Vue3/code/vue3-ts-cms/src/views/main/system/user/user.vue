<template>
  <div class="user">
    <fh-form :fromItems="fromItems" />
  </div>
</template>

<script setup lang="ts">
import { fhForm } from '@/base-ui/form'
import { IFormItem } from '@/base-ui/form/type'

const fromItems: IFormItem[] = [
  {
    type: 'input',
    label: 'id',
    placeholder: '请输入id'
  },
  {
    type: 'input',
    label: '账号',
    placeholder: '请输入账号'
  },
  {
    type: 'password',
    label: '密码',
    placeholder: '请输入密码'
  },
  {
    type: 'select',
    label: '喜欢的运动',
    placeholder: '请选择喜欢的运动',
    options: [
      { title: '篮球', value: 'basketball' },
      { title: '羽毛球', value: 'football' }
    ]
  },
  {
    type: 'picker',
    label: '创建时间',
    placeholder: '请选择创建时间的范围',
    otherOptions: {
      type: 'daterange',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间'
    }
  }
]
</script>

<style scoped></style>
