import Frame from './Frame';
import { Size } from './types';


export default class Singleton {
  // shared field
  private static readonly _instances: Set<Frame> = new Set();
  private static readonly MAX_INSTANCES_COUNT = 10;

  // constructor is private to prevent creation out of handled methods
  private constructor() {
  }

  private static createSingleton(name: string, size?: Partial<Size>): Frame {
    const newInstance = new Frame(name, size);
    Singleton._instances.add(newInstance);
    return newInstance;
  }

  static getInstance(name: string, size?: Partial<Size>): Frame {
    if (Singleton._instances.size < Singleton.MAX_INSTANCES_COUNT) {
      return Singleton.createSingleton(name, size);
    } else {
      throw new Error(`Cannot get instance with name "${name}": Count of instances should be less or equal to ${Singleton.MAX_INSTANCES_COUNT}`);
    }
  }
}