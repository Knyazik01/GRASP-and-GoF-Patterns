export enum BakeStateEnum {
  Cold = 'Cold',
  Normal = 'Normal',
  Overheating = 'Overheating',
}

export interface IBake {
  state: IBakeState;
  bake(): void;
  raiseTemperature(): void;
  reduceTemperature(): void;
}

export interface IBakeState {
  bake(bake: IBake): void;
  raiseTemperature(bake: IBake): void;
  reduceTemperature(bake: IBake): void;
}