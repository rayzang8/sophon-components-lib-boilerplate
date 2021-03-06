// import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import external from "rollup-plugin-peer-deps-external";
import { eslint } from 'rollup-plugin-eslint';
import postcss from 'rollup-plugin-postcss';
import configList, {resolveFile} from './rollup.config';
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

process.env.NODE_ENV = 'production';

configList.map((config, index) => {

  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
    terser()
  ];

  return config;
});

configList.push({
  input: resolveFile('src/index.ts'),
  output: {
    file: resolveFile('dist/index.es.js'),
    format: 'es',
    globals: {
      "react": "React",
      "react-dom": "ReactDOM",
      "antd": "antd",
    },
    sourcemap: false,
  },
  plugins: [
    external(),
    eslint({fix: true}),
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
    typescript(),
    // babel({
    //   exclude: ['node_modules/**'],
    //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' ) // 解决 import * as React from "react"写成 import React from "react" 报 'default' is not exported by...的错误
    }),
    terser(),
  ],
})

module.exports = configList;
