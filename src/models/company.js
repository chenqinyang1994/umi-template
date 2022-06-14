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
