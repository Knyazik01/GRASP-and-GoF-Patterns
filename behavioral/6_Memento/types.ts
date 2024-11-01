export type State = string;

export interface IMemento {
  getState(): State;
}

export interface IOrganiser {
  createMemento(): IMemento;

  restore(memento: IMemento): void;

  // to allow modification
  changeState(state: State): void;
}

export interface ICaretaker {
  saveCurrentState(versionName: string): void;

  undo(): void;

  // for client history
  getHistory(): void;
}