import type { SomeObj } from '@/types';

/**
 * qs with URLSearchParams
 */
const qs = {
  stringify: (obj: SomeObj) => {
    return new URLSearchParams(obj).toString();
  },
  parse: (search: string) => {
    const entries = Array.from(new URLSearchParams(search));
    const res = entries.reduce((p, c) => {
      const [key, value] = c;
      p[key] = value;
      return p;
    }, {} as SomeObj);
    return res;
  },
};

export default qs;
