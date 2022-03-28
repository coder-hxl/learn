<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <fh-card title="分类商品数量(饼图)">
          <base-echarts :options="options"></base-echarts>
        </fh-card>
      </el-col>
      <el-col :span="10">
        <fh-card title="不同城市商品销量"></fh-card>
      </el-col>
      <el-col :span="7"
        ><fh-card title="分类商品数量(玫瑰图)"></fh-card
      ></el-col>
    </el-row>

    <el-row :gutter="10" class="two-row">
      <el-col :span="12">
        <fh-card title="分类商品的销量"></fh-card>
      </el-col>
      <el-col :span="12">
        <fh-card title="分类商品的收藏"></fh-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { fhCard } from '@/base-ui/card'
import baseEcharts from '@/base-ui/echarts'

import { useDashboardStore } from '@/store'

const dashboardStore = useDashboardStore()
dashboardStore.getDashboardDataActions()

const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}
</script>

<style scoped lang="less">
.dashboard {
  .two-row {
    margin-top: 15px;
  }
}
</style>
