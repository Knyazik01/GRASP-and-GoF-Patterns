export type TreeElementShowType = {
  id: number;
  count: number;
  children?: TreeElementShowType[],
};

export interface ITreeElement {
  id: number;
  count: number;

  decrement(): void;

  increment(): void;

  show(): TreeElementShowType;
}

export interface INodeElement extends ITreeElement {
  // Composite - child includes parent item type.
  // Allows walk throw tree without visible recursion
  children: ITreeElement[];

  addChild(node: INodeElement): void;
}