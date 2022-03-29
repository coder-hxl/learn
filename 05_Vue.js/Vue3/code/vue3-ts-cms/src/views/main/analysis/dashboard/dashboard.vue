<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <fh-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </fh-card>
      </el-col>
      <el-col :span="10">
        <fh-card title="不同城市商品销量"></fh-card>
      </el-col>
      <el-col :span="7">
        <fh-card title="分类商品数量(玫瑰图)">
          <rose-echart :areaData="categoryGoodsCount"></rose-echart>
        </fh-card>
      </el-col>
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
import { computed } from 'vue'
import { useDashboardStore } from '@/store'

import FhCard from '@/base-ui/card'
import { pieEchart, roseEchart } from '@/components/page-echarts'

const dashboardStore = useDashboardStore()
dashboardStore.getDashboardDataActions()

const categoryGoodsCount = computed(() => {
  return dashboardStore.categoryGoodsCount.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
})
</script>

<style scoped lang="less">
.dashboard {
  .two-row {
    margin-top: 15px;
  }
}
</style>
