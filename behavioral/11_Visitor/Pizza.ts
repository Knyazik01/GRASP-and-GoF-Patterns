import { IPizza, Ingredient, Visitor } from './types';

class Pizza implements IPizza {
  private readonly ingredients: Ingredient[] = [];

  accept(visitor: Visitor, options?: object): void {
    visitor.visit(this, options);
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}

export default Pizza;