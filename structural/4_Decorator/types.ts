export enum Ingredient {
  Cheese = 'Cheese',
  Bacon = 'Bacon',
  Pineapples = 'Pineapples',
  Mushrooms = 'Mushrooms',
  Shrimp = 'Shrimp',
  Salmon = 'Salmon',
}

export type PizzaIngredient = {
  name: Ingredient,
  count: number,
}

export interface AbstractPizza {
  addIngredient(ingredient: Ingredient): void;
  bake(pizzaName: string): string;
}