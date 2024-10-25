import { INodeElement, ITreeElement, TreeElementShowType } from './types';

export class LeafElement implements ITreeElement {
  id: number;
  count: number;

  constructor(count: number) {
    this.id = count;
    this.count = count;
  }

  show(): TreeElementShowType {
    return { id: this.id, count: this.count };
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

export class NodeElement implements INodeElement {
  id: number;
  count: number;
  children: ITreeElement[] = [];

  constructor(count: number) {
    this.id = count;
    this.count = count;
  }

  addChild(child: ITreeElement) {
    this.children.push(child);
  }

  show(): TreeElementShowType {
    return {
      id: this.id,
      count: this.count,
      children: this.children.map((child: ITreeElement) => child.show()),
    };
  }

  increment() {
    this.count += 1;

    this.children.forEach((child: ITreeElement) => {
      child.increment();
    });
  }

  decrement() {
    this.count -= 1;

    this.children.forEach((child: ITreeElement) => {
      child.decrement();
    });
  }
}
