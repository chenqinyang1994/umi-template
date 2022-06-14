import request from '@/utils/request';

const BASE_URL = 'api/v1/home';

export function homeDetail({ id, ...data }: any) {
  return request({
    url: `${BASE_URL}/${id}`,
    method: 'get',
    data,
  });
}

export function homeCreate(data: any) {
  return request({
    url: BASE_URL,
    method: 'post',
    data,
  });
}

export function homeUpdate({ id, ...data }: any) {
  return request({
    url: `${BASE_URL}/${id}`,
    method: 'put',
    data,
  });
}

export function homeDelete({ id, ...data }: any) {
  return request({
    url: `${BASE_URL}/${id}`,
    method: 'delete',
    data,
  });
}
