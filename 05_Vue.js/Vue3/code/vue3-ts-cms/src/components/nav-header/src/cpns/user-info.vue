<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="32"
          src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
        ></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="Avatar">{{ name }}</el-dropdown-item>
          <el-dropdown-item divided>系统管理</el-dropdown-item>
          <el-dropdown-item>帮助</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided icon="CircleCloseFilled"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLoginStore } from '@/store'

const loginStore = useLoginStore()
const name = computed(() => loginStore.userInfo.name)
</script>

<style scoped lang="less">
.user-info {
  .el-dropdown-link {
    cursor: pointer;
  }
}
</style>
