// 把驼峰转换为横杠链接
export const toLine = (value: string) => {
  return value.replace(/(A-Z)/g, "-$1").toLowerCase();
};
