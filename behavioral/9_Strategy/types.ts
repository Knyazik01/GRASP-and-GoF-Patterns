export interface IStrategy {
  sort(array: number[]): number[];
}

export interface IContext {
  sort(array: number[]): number[];

  setStrategy(strategy: IStrategy): void;
}