import { IOrderedDish, INationalityKitchen } from './types';

class NationalityKitchen implements INationalityKitchen {
  private dish: IOrderedDish;
  dishType: string;

  constructor(dish: IOrderedDish, dishType: string) {
    this.dish = dish;
    this.dishType = dishType;
  }

  getName() {
    return this.dish.getName() + ' ' + this.dishType;
  }
}

export class AmericanKitchen extends NationalityKitchen {
  constructor(dish: IOrderedDish) {
    super(dish, 'Pizza');
  }
}

export class JapaneseKitchen extends NationalityKitchen {
  constructor(dish: IOrderedDish) {
    super(dish, 'Roll');
  }
}

export class UkrainianKitchen extends NationalityKitchen {
  constructor(dish: IOrderedDish) {
    super(dish, 'Varenyk');
  }
}