<template>
  <el-menu
    default-active="2"
    :collapse="collapse"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="2">
      <el-icon><el-icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><el-icon-document /></el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><el-icon-document /></el-icon>
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
let props = defineProps<{
  collapse: boolean;
}>();
</script>

<style lang="scss" scoped></style>
