import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';

import checkVersion from '@/utils/checkVersion';

dayjs.locale('zh-cn');

// 检测版本升级
checkVersion();
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    checkVersion();
  }
});
