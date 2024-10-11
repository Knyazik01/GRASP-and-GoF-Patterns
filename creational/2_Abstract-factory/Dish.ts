import { IDish } from './types';

// JAPANESE
export class GoldDragon implements IDish {
  public getName(): string {
    return 'Gold Dragon';
  }
}
export class GreenDragon implements IDish {
  public getName(): string {
    return 'Green Dragon';
  }
}
export class RedDragon implements IDish {
  public getName(): string {
    return 'Red Dragon';
  }
}

// AMERICAN
export class ClamChowder implements IDish {
  public getName(): string {
    return 'Clam chowder';
  }
}
export class RoastedTurkey implements IDish {
  public getName(): string {
    return 'Roasted turkey';
  }
}
export class ApplePie implements IDish {
  public getName(): string {
    return 'Apple pie';
  }
}

// UKRAINIAN
export class Borshch implements IDish {
  getName(): string {
    return 'Borshch';
  }
}
export class Holubtsi implements IDish {
  getName(): string {
    return 'Holubtsi';
  }
}
export class Syrnyky implements IDish {
  getName(): string {
    return 'Syrnyky';
  }
}