import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import "./assets/css/index.css";
import { toLine } from "./utils";

const app = createApp(App);
// el-icon-xxx
for (const i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}

app.use(createPinia());

app.use(router).use(ElementPlus);

app.mount("#app");
