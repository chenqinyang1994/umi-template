import React, { useEffect } from 'react';
import type { Dispatch } from 'umi';
import { Helmet, useRequest, useSelector, useDispatch } from 'umi';

import type { DefaultRootState } from '@/types';
import { companyDetail } from '@/services/company';

import './index.less';

type Iprops = {
  user: any[];
};

const Company: React.FC = () => {
  const { user } = useSelector<DefaultRootState, Iprops>(
    (state: { company: { user: any[] } }) => ({
      user: state.company.user,
    }),
  );
  const dispatch = useDispatch<Dispatch>();

  console.log('====================================');
  console.log('user---', user);
  console.log('====================================');

  const { data: companyDetailData, run: getDetail } = useRequest(
    () => {
      return companyDetail({ id: 18 });
    },
    { manual: true },
  );

  console.log('====================================');
  console.log('companyDetailData---', companyDetailData);
  console.log('====================================');

  useEffect(() => {
    getDetail();
    dispatch({
      type: 'company/list',
    });
  }, []);

  return (
    <div className="company">
      <Helmet>
        <title>公司</title>
      </Helmet>
      <div className="company-main">
        <h1>company-main</h1>
      </div>
    </div>
  );
};

export default Company;
