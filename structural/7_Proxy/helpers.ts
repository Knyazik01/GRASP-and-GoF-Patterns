import { Operation } from '../5_Facade/types';
import { CacheKeyType } from './types';

export const getCacheKey = (a: number, b: number, operation: Operation): CacheKeyType => {
  const [min, max] = [Math.min(a, b), Math.max(a, b)];
  return `${operation}_${min}_${max}`;
};