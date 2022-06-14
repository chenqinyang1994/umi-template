import { useEffect } from 'react';
import type { History } from 'umi';
import type { Location } from '@/types';
import pfService from '@/utils/pfService';
import authService from '@/utils/authService';

function useUrlToken(history: History, location: Location) {
  useEffect(() => {
    const { tk, pf, ...nextQuery } = location.query || {};
    if (tk) authService.set(tk);
    if (pf) pfService.set(pf);
    if (tk || pf) {
      history.replace({
        pathname: location.pathname,
        query: nextQuery,
      });
    }
  }, [history, location.pathname, location.query]);
}

export default useUrlToken;
