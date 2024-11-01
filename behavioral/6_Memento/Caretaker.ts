import { ICaretaker, IMemento, IOrganiser } from './types';

class Caretaker implements ICaretaker {
  private mementos: [string, IMemento][] = [];
  private organiser: IOrganiser;

  constructor(organiser: IOrganiser) {
    this.organiser = organiser;
  }

  saveCurrentState(versionName: string): void {
    const curState = this.organiser.createMemento();
    this.mementos.push([versionName, curState]);
  }

  undo(): void {
    // get last version + delete from array
    const [versionName, prevVersion] = this.mementos.pop();

    this.organiser.restore(prevVersion);
  }

  getHistory(): void {
    const history: string = this.mementos.map(([name, memento]) => {
      return (`${name}: ${memento.getState()}`);
    }).join('\n');

    console.info(history);
  }
}

export default Caretaker;