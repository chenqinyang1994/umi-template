declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare interface Window {
  umi_version: any;
  routerBase?: string;
}
declare module 'antd-dayjs-webpack-plugin';
