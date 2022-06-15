/*
 * 每次打包时生成一个当前时间戳，用来检测升级
 */
const fs = require('fs');
const path = require('path');

const data = {
  version: +new Date(),
};

fs.writeFileSync(
  path.join(process.cwd(), './version.json'),
  JSON.stringify(data),
  'utf8',
);
