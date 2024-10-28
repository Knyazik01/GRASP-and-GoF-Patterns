import { Operation } from './types';
import { sendRequest } from './utils';

// Facade for dneonline.com
class Facade {
  add(a: number, b: number): Promise<number> {
    return sendRequest(a, b, Operation.Add);
  }

  divide(a: number, b: number): Promise<number> {
    return sendRequest(a, b, Operation.Divide);
  }

  multiply(a: number, b: number): Promise<number> {
    return sendRequest(a, b, Operation.Multiply);
  }

  subtract(a: number, b: number): Promise<number> {
    return sendRequest(a, b, Operation.Subtract);
  }
}

export default Facade;