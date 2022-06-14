import type { Location as UmiLocation } from 'umi';

export type SomeObj = Record<string, any>;

export type DefaultRootState = Record<string, any>;

export type Location = UmiLocation & { query?: SomeObj };

export type MyUnitType = 'day' | 'week' | 'month' | 'quarter' | 'year';

export type MyIsoUnitType = MyUnitType | 'isoWeek';
