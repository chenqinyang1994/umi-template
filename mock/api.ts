export default {
  // 支持值为 Object 和 Array
  'GET /api/v1/users': {
    code: 200,
    data: [
      { name: '张三', age: 18 },
      { name: '李四', age: 22 },
    ],
    error: '',
  },

  // GET 可忽略
  '/api/v1/users/18': {
    code: 200,
    data: { name: '张三', age: 18 },
    error: '',
  },

  // 支持自定义函数，API 参考 express@4
  'POST /api/v1/users/create': (req: any, res: any) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
