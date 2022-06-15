import checkVersion from '@/utils/checkVersion';

// 检测版本升级
checkVersion();
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    checkVersion();
  }
});
