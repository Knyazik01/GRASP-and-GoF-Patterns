import { IMemento, IOrganiser, State } from './types';

class Memento implements IMemento {
  private readonly state: State;

  constructor(state: State) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

class Organiser implements IOrganiser {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  createMemento(): IMemento {
    return new Memento(this.state);
  }

  restore(memento: IMemento): void {
    this.state = memento.getState();
  }

  // For changing state by client code
  changeState(state: State): void {
    this.state = state;
  }
}

export default Organiser;