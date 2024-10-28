export enum Operation {
  'Add' = 'Add',
  'Divide' = 'Divide',
  'Multiply' = 'Multiply',
  'Subtract' = 'Subtract',
}

export interface IFacade {
  add(a: number, b: number): Promise<number>;
  divide(a: number, b: number): Promise<number>;
  multiply(a: number, b: number): Promise<number>;
  subtract(a: number, b: number): Promise<number>;
}