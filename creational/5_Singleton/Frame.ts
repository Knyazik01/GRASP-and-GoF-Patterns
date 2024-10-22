import { Size } from './types';

export default class Frame {
  public width: number;
  public height: number;
  public name: string;

  constructor(name: string, { width = 0, height = 0 }: Partial<Size> = {}) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
}