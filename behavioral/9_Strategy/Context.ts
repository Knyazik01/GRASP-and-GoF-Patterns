import { IContext, IStrategy } from './types';

class Context implements IContext {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IStrategy): void {
    this.strategy = strategy;
  }

  sort(array: number[]): number[] {
    return this.strategy.sort(array);
  }
}

export default Context;