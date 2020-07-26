import configList from './rollup.config';
import { uglify } from 'rollup-plugin-uglify';

process.env.NODE_ENV = 'production';

configList.map((config, index) => {

  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
    ...[
      uglify()
    ]
  ]

  return config;
})

module.exports = configList;