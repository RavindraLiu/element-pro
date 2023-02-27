<template>
  <span @click="toggle" class="header">
    <el-icon-expand v-if="collapse"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold>
  </span>
</template>

<script setup lang="ts">
let props = defineProps<{
  collapse: boolean;
}>();

let emits = defineEmits(["update:collapse"]);
// 需要修改父组件的值
const toggle = () => {
  emits("update:collapse", !props.collapse);
};
</script>

<style scoped>
.header {
  height: 60px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>
