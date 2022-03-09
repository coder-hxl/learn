<template>
  <div class="form">
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in fromItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select style="width: 100%" v-bind="item.otherOptions">
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
                  ></el-date-picker>
                </el-config-provider>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IFormItem } from '../type'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

defineProps({
  fromItems: {
    type: Array as PropType<IFormItem[]>
  }
})
</script>

<style scoped lang="less"></style>
