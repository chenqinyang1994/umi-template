import _set from 'lodash/set';

import { companyGetUser } from '@/services/company';

export default {
  namespace: 'company',
  state: {
    user: [],
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    entities(draft, { payload = {} }) {
      Object.keys(payload).forEach((key) => {
        _set(draft, ['entities', key], payload[key]);
      });
    },
    entityUpdate(draft, { payload }) {
      const { id, ...values } = payload;
      Object.keys(values).forEach((key) => {
        _set(draft, ['entities', id, key], values[key]);
      });
    },
  },
  effects: {
    *list({ payload }, { call, put, select }) {
      const res = yield call(companyGetUser, payload);
      if (res?.code === 200) {
        yield put({
          type: 'save',
          payload: {
            user: res?.data || [],
          },
        });
      }
      return res;
    },
  },
};
