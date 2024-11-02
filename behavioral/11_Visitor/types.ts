export enum Ingredient {
  Cheese = 'Cheese',
  Bacon = 'Bacon',
  Pineapples = 'Pineapples',
  Mushrooms = 'Mushrooms',
  Shrimp = 'Shrimp',
  Salmon = 'Salmon',
}

export interface Visitor {
  visit(pizza: IPizza, options?: object): void;
}

export interface IPizza {
  accept(visitor: Visitor): void;
  get ingredients(): Ingredient[];
  set ingredients(ingredients: Ingredient[]);
}