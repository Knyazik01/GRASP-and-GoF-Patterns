import { AbstractPizza, Ingredient, PizzaIngredient } from './types';

export default class Pizza implements AbstractPizza {
  private ingredients: Map<Ingredient, number>;

  constructor() {
    this.ingredients = new Map<Ingredient, number>();
  }

  addIngredient(name: Ingredient): void {
    const newCount = (this.ingredients.get(name) ?? 0) + 1;
    this.ingredients.set(name, newCount);
  }

  private getIngredients(): PizzaIngredient[] {
    return [...this.ingredients.entries()]
      .map(([name, count]) => ({ name, count }));
  }

  bake(pizzaName: string): string {
    const composition = this.getIngredients()
      .map(({ name, count }) => `${count} x ${name}`)
      .join('\n');

    const title = `Pizza '${pizzaName}'`;
    return `${title}\n${composition}`;
  }
}