import { IPizza, Ingredient, Visitor } from './types';

class Pizza implements IPizza {
  private _ingredients: Ingredient[] = [];

  accept(visitor: Visitor, options?: object): void {
    visitor.visit(this, options);
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  set ingredients(ingredients: Ingredient[]) {
    this._ingredients = ingredients;
  }
}

export default Pizza;