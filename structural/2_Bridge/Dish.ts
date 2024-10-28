import { IOrderedDish } from './types';

export class FirstDish implements IOrderedDish {
  public getName(): string {
    return 'Original';
  }
}

export class SecondDish implements IOrderedDish {
  public getName(): string {
    return 'Spicy';
  }
}

export class ThirdDish implements IOrderedDish {
  public getName(): string {
    return 'Vegan';
  }
}

export class DesertDish implements IOrderedDish {
  public getName(): string {
    return 'Sweet';
  }
}