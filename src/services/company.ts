import request from '@/utils/request';

const BASE_URL = 'api/v1';

export function companyGetUser(data: any) {
  return request({
    url: `${BASE_URL}/users`,
    method: 'get',
    data,
  });
}

export function companyDetail({ id, ...data }: any) {
  return request({
    url: `${BASE_URL}/users/${id}`,
    method: 'get',
    data,
  });
}

export function companyCreate(data: any) {
  return request({
    url: BASE_URL,
    method: 'post',
    data,
  });
}

export function companyUpdate({ id, ...data }: any) {
  return request({
    url: `${BASE_URL}/${id}`,
    method: 'put',
    data,
  });
}

export function companyList(data: any) {
  return request({
    url: `${BASE_URL}`,
    method: 'get',
    data,
  });
}

export function companyDelete({ id, ...data }: any) {
  return request({
    url: `${BASE_URL}/${id}`,
    method: 'delete',
    data,
  });
}
