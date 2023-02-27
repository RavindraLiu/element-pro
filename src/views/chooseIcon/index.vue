<template>
  <div>
    <kk-choose-icon title="选择图标" v-model:visible="visible">
    </kk-choose-icon>
    {{ visible }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import kkChooseIcon from "@/components/chooseIcon/index.vue";

let visible = ref<boolean>(false);
</script>

<style scoped></style>
