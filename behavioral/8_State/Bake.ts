import { IBake, IBakeState } from './types';
import { ColdBakeState } from './State';

class Bake implements IBake {
  state: IBakeState;

  constructor(state: IBakeState = new ColdBakeState()) {
    this.state = state;
  }

  bake(): void {
    this.state.bake(this);
  }

  raiseTemperature(): void {
    this.state.raiseTemperature(this);
  }

  reduceTemperature(): void {
    this.state.reduceTemperature(this);
  }
}

export default Bake;