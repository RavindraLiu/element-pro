<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavSide from "@/components/container/navSide/index.vue";
import NavHeader from "@/components/container/navHeader/index.vue";

let isCollapse = ref<boolean>(true);
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.el-header {
  padding: 0;
}
</style>
