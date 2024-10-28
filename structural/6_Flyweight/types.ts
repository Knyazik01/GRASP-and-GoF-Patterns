export enum UnitType {
  TANK = 'TANK',
  SOLDAT = 'SOLDAT',
}

export interface FlyweightUnit {
  texture: string;
  movingSound: string;
  shotSound: string;
}

export interface IArmyUnit {
  media: FlyweightUnit;

  x: number;
  y: number;

  move(dx: number, dy: number): void;

  relocate(x: number, y: number): void;

  draw(): void;

  shot(): void;
}

export interface IArmy {
  units: IArmyUnit[];

  addTank(x: number, y: number): void;

  addSoldat(x: number, y: number): void;

  moveAll(dx: number, dy: number): void;

  relocateAll(x: number, y: number): void;

  drawAll(): void;

  shotAll(): void;
}