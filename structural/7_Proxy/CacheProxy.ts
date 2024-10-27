import { IFacade, Operation } from '../5_Facade/types';
import { CacheKeyType, CacheType } from './types';
import { getCacheKey } from './helpers';

class CacheProxy implements IFacade {
  private readonly facade: IFacade;
  private readonly cache: CacheType = new Map();

  constructor(facade: IFacade) {
    this.facade = facade;
  }

  private saveToCache = (key: CacheKeyType, value: number): void => {
    this.cache.set(key, value);
  };

  private getFromCache(a: number, b: number, operation: Operation): {key: CacheKeyType, value: number | null } {
    const key = getCacheKey(a, b, operation);
    const cachedValue = this.cache.get(key);

    return { key, value: cachedValue ?? null };
  }

  async add(a: number, b: number): Promise<number> {
    const { key, value } = this.getFromCache(a, b, Operation.Add);

    // return cached value, if exists
    if (value !== null) {
      console.info(`${value} <cached>`);
      return value;
    }

    // cached value is not found, so we return real value
    const result = await this.facade.add(a, b);

    // save to cache
    this.saveToCache(key, result);

    return result;
  }

  async divide(a: number, b: number): Promise<number> {
    const { key, value } = this.getFromCache(a, b, Operation.Divide);

    // return cached value, if exists
    if (value !== null) {
      console.info(`${value} <cached>`);
      return value;
    }

    // cached value is not found, so we return real value
    const result = await this.facade.divide(a, b);

    // save to cache
    this.saveToCache(key, result);

    return result;
  }

  async multiply(a: number, b: number): Promise<number> {
    const { key, value } = this.getFromCache(a, b, Operation.Multiply);

    // return cached value, if exists
    if (value !== null) {
      console.info(`${value} <cached>`);
      return value;
    }

    // cached value is not found, so we return real value
    const result = await this.facade.multiply(a, b);

    // save to cache
    this.saveToCache(key, result);

    return result;
  }

  async subtract(a: number, b: number): Promise<number> {
    const { key, value } = this.getFromCache(a, b, Operation.Subtract);

    // return cached value, if exists
    if (value !== null) {
      console.info(`${value} <cached>`);
      return value;
    }

    // cached value is not found, so we return real value
    const result = await this.facade.subtract(a, b);

    // save to cache
    this.saveToCache(key, result);

    return result;
  }
}

export default CacheProxy;