import { defineConfig } from 'umi';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

const isProd = process.env.TARGET === 'prod';
const isQa = process.env.TARGET === 'qa';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  devServer: { port: 1234 },
  hash: true,
  locale: {
    default: 'zh-CN',
  },
  antd: {},
  dva: {
    immer: true,
    hmr: true,
  },
  favicon: 'favicon.svg',
  define: {
    'process.env.TARGET': process.env.TARGET || 'dev',
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.plugin('AntdDayjsWebpackPlugin').use(AntdDayjsWebpackPlugin);
  },
});
