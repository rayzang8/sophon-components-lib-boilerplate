/**
 * 避免 import .less 文件时报错  Cannot find module 'XXXX.less' or its corresponding type declarations
 */
declare module '*.less' {
  const classes: { [className: string]: string };
  export default classes;
}