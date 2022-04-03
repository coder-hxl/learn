<template>
  <div class="dashboard">
    <div class="dashboard-statistical">
      <template v-for="item in amountGoodsList" :key="item.title">
        <fh-page-statistical v-bind="item"></fh-page-statistical>
      </template>
    </div>

    <!-- <el-row :gutter="10" class="dashboard-chart">
      <el-col :xs="24" :md="6">
        <fh-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </fh-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <fh-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </fh-card>
      </el-col>
      <el-col :xs="24" :md="6">
        <fh-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </fh-card>
      </el-col>
    </el-row> -->

    <!-- <el-row :gutter="10" class="dashboard-chart">
      <el-col :xs="24" :md="12">
        <fh-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </fh-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <fh-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </fh-card>
      </el-col>
    </el-row> -->

    <div class="dashboard-echarts">
      <div class="pie">
        <fh-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </fh-card>
      </div>
      <div class="map">
        <fh-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </fh-card>
      </div>
      <div class="rose">
        <fh-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </fh-card>
      </div>
      <div class="line">
        <fh-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </fh-card>
      </div>
      <div class="bar">
        <fh-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </fh-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDashboardStore } from '@/store'

import FhCard from '@/base-ui/card'
import FhPageStatistical from '@/components/page-statistical'
import {
  pieEchart,
  roseEchart,
  lineEchart,
  barEchart,
  mapEchart
} from '@/components/page-echarts'
import LineEchart from '@/components/page-echarts/src/line-echart.vue'

const dashboardStore = useDashboardStore()
dashboardStore.getDashboardDataActions()

const amountGoodsList = computed(() => {
  return dashboardStore.amountGoodsList.map((item) => {
    return {
      title: item.title,
      tooltip: item.tips,
      targetId: item.amount,
      targetData: item.number1
    }
  })
})

const categoryGoodsCount = computed(() => {
  return dashboardStore.categoryGoodsCount.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
})

const categoryGoodsSale = computed(() => {
  const xLabel: string[] = []
  const values: any[] = []
  for (const item of dashboardStore.categoryGoodsSale) {
    xLabel.push(item.name)
    values.push(item.goodsCount)
  }

  return { xLabel, values }
})

const categoryGoodsFavor = computed(() => {
  const xLabel: string[] = []
  const values: any[] = []
  for (const item of dashboardStore.categoryGoodsFavor) {
    xLabel.push(item.name)
    values.push(item.goodsFavor)
  }

  return { xLabel, values }
})

const addressGoodsSale = computed(() => {
  return dashboardStore.addressGoodsSale.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped lang="less">
@media (max-width: 768px) {
  .dashboard {
    .dashboard-statistical {
      row-gap: 10px;
    }
    .dashboard-echarts {
      grid-template-areas:
        'pie'
        'map'
        'rose'
        'line'
        'bar';
      row-gap: 10px;
    }
  }
}

@media (min-width: 768px) {
  .dashboard {
    .dashboard-statistical {
      grid-template-columns: 1fr 1fr;
      row-gap: 10px;
      column-gap: 10px;
    }

    .dashboard-echarts {
      grid-template-areas:
        'pie map'
        'rose line'
        'bar bar';
      grid-template-columns: 1fr 1fr;
      row-gap: 10px;
      column-gap: 10px;
    }
  }
}

@media (min-width: 1200px) {
  .dashboard {
    .dashboard-statistical {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 10px;
    }
    .dashboard-echarts {
      grid-template-areas:
        'pie map map rose'
        'line line bar bar ';
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 10px;
      column-gap: 10px;
    }
  }
}

.dashboard {
  .dashboard-statistical {
    display: grid;
  }
  .dashboard-echarts {
    display: grid;
    margin-top: 15px;

    .pie {
      grid-area: pie;
    }
    .line {
      grid-area: line;
    }
    .map {
      grid-area: map;
    }
    .bar {
      grid-area: bar;
    }
    .rose {
      grid-area: rose;
    }
  }
}
</style>
