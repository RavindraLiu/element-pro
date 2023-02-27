<template>
  <div>
    <el-button @click="chooseIcon">
      <slot>选择图标</slot>
    </el-button>
    <el-dialog
      :title="title"
      v-model="dialogVisible"
      class="kk--choose-icon-dialog-body"
    >
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(Icons)"
          :key="index"
          @click="handleSelect(item)"
        >
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import * as Icons from "@element-plus/icons-vue";
import { toLine } from "@/utils/index";
import useCopy from "./useCopy";
console.log(Icons, "Icons");

const props = defineProps<{
  visible: boolean;
  title: String;
}>();

const emits = defineEmits(["update:visible"]);
let dialogVisible = computed({
  get: () => props.visible,
  set: (val: boolean) => emits("update:visible", val),
});

let handleSelect = (text: string) => {
  useCopy(`<el-icon-${toLine(text)} />`);
  dialogVisible.value = false;
};

let chooseIcon = () => {
  emits("update:visible", !props.visible);
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
}

svg {
  width: 2em;
  height: 2em;
}
/* ::v-deep(.el-dialog__body) {
  height: 400px !important;
  overflow: scroll;
} */
</style>
