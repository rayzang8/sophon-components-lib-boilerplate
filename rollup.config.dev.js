import configList, {resolveFile} from './rollup.config';
import serve from 'rollup-plugin-serve';

process.env.NODE_ENV = 'development';

const path = require('path');

const PORT = 3030;

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.join('example', 'index.html');
const devUrl = `${devSite}/${devPath}`;

setTimeout(()=>{
  console.log(`[dev]: ${devUrl}`);
  console.log(`[__dirname]: ${__dirname}`);
}, 1000);

configList.map((config, index) => {
  config.input = resolveFile('src/example.js'),
  config.output.file = resolveFile('build/index.js'),
  config.output.sourcemap = true;

  if( index === 0 ) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          contentBase: [resolveFile('')]
        })
      ]
    ]
  }
  
  return config;
})


export default configList;