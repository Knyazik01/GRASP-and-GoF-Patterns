export interface Command {
  execute(): void;
}

export interface IPizza {
  addIngredient(ingredient: string): void;
  getIngredients(): string;
}