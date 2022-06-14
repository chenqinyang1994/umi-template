const apis = {
  local: 'http://localhost:1234',
  qa: 'http://127.0.0.1:5001',
  prod: 'http://127.0.0.1:5555',
};

const apiMap: any = {
  dev: apis.local,
  qa: apis.qa,
  prod: apis.prod,
};

export const API_HOST: string = apiMap[process.env.TARGET || 'dev'];
