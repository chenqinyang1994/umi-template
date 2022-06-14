import { message } from 'antd';

let nowVersion: number | null = null;

function checkVersion() {
  fetch(`/version.json?t=${new Date().getTime()}`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      if (!nowVersion) {
        nowVersion = res.version;
        window.umi_version = res.version;
      } else if (nowVersion < res.version) {
        message.info('检测到新版本，开始刷新');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
}

export default checkVersion;
