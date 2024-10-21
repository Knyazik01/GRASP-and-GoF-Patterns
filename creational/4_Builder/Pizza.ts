import { IPizza, PizzaIngredient } from './types';

export default class Pizza implements IPizza {
  private ingredients: Map<string, number>;

  constructor() {
    this.ingredients = new Map<string, number>();
  }

  addIngredient(name: PizzaIngredient['name'], count = 1): void {
    // we cannot add negative count of ingredient
    const newCount = (this.ingredients.get(name) ?? 0) + Math.max(count, 0);
    this.ingredients.set(name, newCount);
  }

  getIngredients(): PizzaIngredient[] {
    return [...this.ingredients.entries()]
      .map(([name, count]) => ({name, count}));
  }

  getDescription(pizzaName: string): string {
    const composition = this.getIngredients()
      .map(({ name, count }) => `${count} x ${name}`)
      .join('\n');

    const title = `Pizza '${pizzaName}'`;
    return `${title}\n${composition}`;
  }
}