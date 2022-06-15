import React, { useEffect } from 'react';
import type { Dispatch, IRouteComponentProps } from 'umi';
import { useDispatch } from 'umi';
import type { Location } from '@/types';

import Header from '@/components/header';
import useUrlToken from '@/hooks/useUrlToken';
import authService from '@/utils/authService';

const Layout: React.FC<IRouteComponentProps> = ({
  children,
  history,
  location,
}) => {
  // 存储并去掉url中的tk和pf参数
  useUrlToken(history, location);

  const dispatch = useDispatch<Dispatch>();

  const isLoginPage = location.pathname.startsWith('/login');
  const isHomePage = location.pathname.startsWith('/home');
  const isRoot = location.pathname === '/';
  const { tk } = (location as Location).query || {};
  const token = authService.get();

  useEffect(() => {
    if (tk) return;
    if (!authService.get()) {
      if (!isLoginPage) history.push('/login');
      return;
    }
    if (isLoginPage) return;
  }, [history, isLoginPage, tk]);

  useEffect(() => {
    if (isRoot && !isHomePage) {
      history.replace('/home');
    }
  }, [history, isHomePage, isRoot]);

  return (
    <div className="layout">
      {!isLoginPage && <Header />}
      {children}
    </div>
  );
};

export default Layout;
