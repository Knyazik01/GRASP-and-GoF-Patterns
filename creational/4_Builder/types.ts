export type PizzaIngredient = {
  name: string,
  count: number,
}

export interface IPizza {
  addIngredient(name: string, count?: number): void;
  getIngredients(): PizzaIngredient[];
  getDescription(pizzaName: string): string;
}