<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" size="large">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemLayout">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[item.field]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'picker'">
                <el-config-provider :locale="zhCn">
                  <el-date-picker
                    v-bind="item.otherOptions"
                    style="width: 100%"
                    v-model="formData[item.field]"
                  ></el-date-picker>
                </el-config-provider>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="foot">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, PropType, watch } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

import { IFormItem } from '../types'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemLayout: {
    type: Object,
    default: () => ({
      padding: '10px 50px'
    })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

const emits = defineEmits(['update:modelValue'])

const formData = ref({ ...props.modelValue })
watch(
  formData,
  (newValue) => {
    emits('update:modelValue', newValue)
  },
  {
    deep: true
  }
)
</script>

<style scoped lang="less">
.form {
  padding-top: 18px;
}
</style>
