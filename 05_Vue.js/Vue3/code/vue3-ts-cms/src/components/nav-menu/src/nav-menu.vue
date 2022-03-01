<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">Vue3+TS</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <template v-for="item in menus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu>
            <!-- 二级菜单的标题 -->
            <template #title>
              <el-icon v-if="item.icon"
                ><component :is="item.icon"></component
              ></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单的children -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item>
                <el-icon v-if="subItem.icon">
                  <component :is="subItem.icon"></component>
                </el-icon>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item>
            <el-icon v-if="item.icon">
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLoginStore } from '@/store'

const loginStore = useLoginStore()
const menus = computed(() => loginStore.userMenus)
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      color: rgb(183, 189, 195);
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    color: rgb(183, 189, 195);
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }
}
</style>
