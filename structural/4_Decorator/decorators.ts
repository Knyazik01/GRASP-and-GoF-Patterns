import { AbstractPizza, Ingredient } from './types';

export class PizzaDecorator implements AbstractPizza {
  private readonly ingredient: Ingredient;
  private subject: AbstractPizza;

  constructor(pizza: AbstractPizza, ingredient: Ingredient) {
    this.subject = pizza;
    this.ingredient = ingredient;
  }

  addIngredient(ingredient: Ingredient) {
    this.subject.addIngredient(ingredient);
  }

  bake(pizzaName: string): string {
    this.addIngredient(this.ingredient);

    return this.subject.bake(pizzaName);
  }
}

// Specific decorators

export class CheeseDecorator extends PizzaDecorator {
  constructor(pizza: AbstractPizza) {
    super(pizza, Ingredient.Cheese);
  }
}

export class BaconDecorator extends PizzaDecorator {
  constructor(pizza: AbstractPizza) {
    super(pizza, Ingredient.Bacon);
  }
}

export class PineapplesDecorator extends PizzaDecorator {
  constructor(pizza: AbstractPizza) {
    super(pizza, Ingredient.Pineapples);
  }
}

export class MushroomsDecorator extends PizzaDecorator {
  constructor(pizza: AbstractPizza) {
    super(pizza, Ingredient.Mushrooms);
  }
}

export class ShrimpDecorator extends PizzaDecorator {
  constructor(pizza: AbstractPizza) {
    super(pizza, Ingredient.Shrimp);
  }
}

export class SalmonDecorator extends PizzaDecorator {
  constructor(pizza: AbstractPizza) {
    super(pizza, Ingredient.Salmon);
  }
}