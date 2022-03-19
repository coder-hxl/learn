<template>
  <div class="fh-tabel">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>

    <el-table
      :data="listData"
      border
      v-bind="childrenProps"
      size="large"
      @selection-change="handleSelectionChange"
      style="width: 100%"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="70"
      ></el-table-column>

      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :small="true"
          :total="listCount"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          :current-page="page.currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  listCount: {
    type: Number,
    default: 0
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})

const emits = defineEmits(['selectionChange', 'update:page'])

const handleSelectionChange = (value: any) => {
  emits('selectionChange', value)
}

const handleCurrentChange = (currentPage: number) => {
  emits('update:page', { ...props.page, currentPage })
}
const handleSizeChange = (pageSize: number) => {
  emits('update:page', { ...props.page, pageSize })
}
</script>

<style scoped lang="less">
.fh-tabel {
  .header {
    display: flex;
    padding: 0 5px;
    height: 45px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 22px;
      font-weight: 700;
    }
  }

  .footer {
    margin-top: 18px;

    .el-pagination {
      justify-content: flex-end;
    }
  }
}
</style>
