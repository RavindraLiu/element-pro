import { ElMessage } from "element-plus";
export default function useCopy(text: string) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  // 选中input框
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  ElMessage.success("复制成功");
}
