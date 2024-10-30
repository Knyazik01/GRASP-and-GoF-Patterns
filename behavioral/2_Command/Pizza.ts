import { IPizza } from './types';

export class Pizza implements IPizza {
  private ingredients: string[] = [];

  addIngredient(ingredient: string): void {
    this.ingredients.push(ingredient);
  }

  getIngredients(): string {
    return this.ingredients.join(", ");
  }
}