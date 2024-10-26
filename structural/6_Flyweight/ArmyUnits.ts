import { FlyweightUnit, IArmyUnit, UnitType } from './types';
import { FlyweightUnitSingleton } from './FlyweightUnits';

class ArmyUnit implements IArmyUnit {
  media: FlyweightUnit;
  x: number;
  y: number;

  constructor(x: number, y: number, media: FlyweightUnit) {
    this.x = x;
    this.y = y;
    this.media = media;
  }

  move(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
    console.info(this.media.movingSound);
  }

  relocate(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.info(this.media.texture);
  }

  shot(): void {
    console.info(this.media.shotSound);
  }
}

export class Tank extends ArmyUnit {
  media: FlyweightUnit;

  x: number;
  y: number;

  constructor(x: number, y: number) {
    const media = FlyweightUnitSingleton.getUnit(UnitType.TANK);
    super(x, y, media);
  }
}

export class Soldat extends ArmyUnit {
  media: FlyweightUnit;

  x: number;
  y: number;

  constructor(x: number, y: number) {
    const media = FlyweightUnitSingleton.getUnit(UnitType.SOLDAT);
    super(x, y, media);
  }
}
