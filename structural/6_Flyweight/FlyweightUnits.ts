import { FlyweightUnit, UnitType } from './types';

const tankTexture =
`  __|__
-@-@-@-@-`;

const soldatTexture =
` O
/|\\
/ \\`;

export class TankFlyweight implements FlyweightUnit {
  texture: string;
  movingSound: string;
  shotSound: string;

  constructor() {
    this.texture = tankTexture;
    this.movingSound = 'Brr...';
    this.shotSound = 'Boom!';
  }
}

export class SoldatFlyweight implements FlyweightUnit {
  texture: string;
  movingSound: string;
  shotSound: string;

  constructor() {
    this.texture = soldatTexture;
    this.movingSound = 'Tap';
    this.shotSound = 'Bang';
  }
}

export class FlyweightUnitSingleton {
  private static units: Partial<{ [key in UnitType]: FlyweightUnit }> = {};

  // creation using singleton,
  // as there should be a single Flyweight unit per type
  private constructor() {
  }

  static getUnit(type: UnitType): FlyweightUnit {
    // create flyweight unit if not exist
    if (!this.units[type]) {
      if (type === UnitType.TANK) this.units[type] = new TankFlyweight();
      else if (type === UnitType.SOLDAT) this.units[type] = new SoldatFlyweight();
    }

    // item should exist after creation
    if (!this.units[type]) {
      throw new Error(`Unknown unit: ${type}`);
    }

    return this.units[type];
  }
}