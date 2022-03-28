<template>
  <div class="baseEcharts">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, withDefaults } from 'vue'
import * as echarts from 'echarts'
// import { EChartsOption } from 'echarts'

const props = withDefaults(
  defineProps<{
    options: any
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const echartsInstance = echarts.init(echartDivRef.value!)

  echartsInstance.setOption(props.options)
})
</script>

<style scoped lang="less"></style>
