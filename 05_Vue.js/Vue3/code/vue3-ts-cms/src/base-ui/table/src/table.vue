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
      size="large"
      style="width: 100%"
      @selection-change="handleSelectionChange"
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
        label="序列"
        align="center"
        width="70"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array as PropType<any[]>,
    default: () => []
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
  }
})

const emits = defineEmits(['selectionChange'])

const handleSelectionChange = (value: any) => {
  emits('selectionChange', value)
}
</script>

<style scoped lang="less">
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
</style>
