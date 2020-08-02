// import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import external from "rollup-plugin-peer-deps-external";
import { eslint } from 'rollup-plugin-eslint';
import postcss from 'rollup-plugin-postcss';
import stylelint from 'rollup-plugin-stylelint';
import typescript from "rollup-plugin-typescript2";

const path = require('path');
const packageJson = require("./package.json");

const resolveFile = function(filePath) {
  return path.join(__dirname, filePath)
}

export {resolveFile}

export default [
  {
    input: resolveFile('src/index.ts'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
      name: packageJson.name,
      globals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "antd": "antd",
      }
    },
    plugins: [
      external(),
      eslint({fix: true}),
      stylelint({
          fix: false,
          include: ['src/**/*.less'],
          // syntax: 'less',
          quiet: false,
      }),
      postcss([{
          extract: false,
          modules: true,
          use: ['less'],
      },{
        extract: false,
        modules: false,
        use: ['css'],
      }]),
      nodeResolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx'], // import 时可以省略后缀名
      }),
      commonjs(),
      typescript(),  // 1.生成d.ts  2.文件解决重导出文件index.ts 中无法引用其它文件 export的接口(interface)的问题
      // babel({
      //     exclude: ['node_modules/**'],
      //     extensions: ['.js', '.jsx', '.ts', '.tsx'], // 应用babel编辑规则的文件
      // }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      })
    ],
  },

]