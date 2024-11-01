import { BakeStateEnum, IBake, IBakeState } from './types';
import bake from './Bake';

abstract class BakeState implements IBakeState {
  protected state: BakeStateEnum;
  private readonly NEXT_STATE: { [state in BakeStateEnum]: BakeStateEnum } = {
    [BakeStateEnum.Cold]: BakeStateEnum.Normal,
    [BakeStateEnum.Normal]: BakeStateEnum.Overheating,
    [BakeStateEnum.Overheating]: BakeStateEnum.Overheating,
  };
  private readonly PREV_STATE: { [state in BakeStateEnum]: BakeStateEnum } = {
    [BakeStateEnum.Cold]: BakeStateEnum.Cold,
    [BakeStateEnum.Normal]: BakeStateEnum.Cold,
    [BakeStateEnum.Overheating]: BakeStateEnum.Normal,
  };
  private readonly BAKE_STATE_OBJECT: { [state in BakeStateEnum]: typeof ColdBakeState | typeof ReadyToWorkBakeState | typeof OverheatingBakeState } = {
    [BakeStateEnum.Cold]: ColdBakeState,
    [BakeStateEnum.Normal]: ReadyToWorkBakeState,
    [BakeStateEnum.Overheating]: OverheatingBakeState,
  };

  constructor(state: BakeStateEnum = BakeStateEnum.Cold) {
    this.state = state;
  }

  abstract bake(): void;

  raiseTemperature(bake: IBake): void {
    const currentState = this.state;
    const newState = this.NEXT_STATE[currentState];

    if (newState === currentState) throw new Error(`Cannot raise the temperature: Current state is '${currentState}'`);
    this.state = newState;

    const BakeStateObject = this.BAKE_STATE_OBJECT[this.state];
    bake.state = new BakeStateObject();
  }

  reduceTemperature(bake: IBake): void {
    const currentState = this.state;
    const newState = this.PREV_STATE[currentState];

    if (newState === currentState) throw new Error(`Cannot reduce the temperature: Current state is '${currentState}'`);
    this.state = newState;

    const BakeStateObject = this.BAKE_STATE_OBJECT[this.state];
    bake.state = new BakeStateObject();
  }
}

export class ColdBakeState extends BakeState {
  bake(): void {
    throw new Error('Baking not allowed: Temperature is too low');
  }
}

export class ReadyToWorkBakeState extends BakeState {
  bake(): void {
    console.info('Working...');
  }
}

export class OverheatingBakeState extends BakeState {
  bake(): void {
    throw new Error('Baking not allowed: Temperature is too high');
  }
}