import  { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { eslint } from 'rollup-plugin-eslint';
import postcss from 'rollup-plugin-postcss';

const path = require('path');


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
    }, 
    plugins: [
      postcss({
          extract: false,
          modules: true,
          use: ['less'],
      }),
      eslint(),
      nodeResolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx'], // import 时可以省略后缀名
      }),
      commonjs(),
      babel({
          exclude: 'node_modules/**',
          extensions: ['.js', '.jsx', '.ts', '.tsx'], // 应用babel编辑规则的文件
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      })
    ],
  },
]