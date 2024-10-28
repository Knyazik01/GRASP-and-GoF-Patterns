import { Operation } from '../5_Facade/types';

export type CacheKeyType = `${Operation}_${number}_${number}`;
export type CacheType = Map<CacheKeyType, number>;