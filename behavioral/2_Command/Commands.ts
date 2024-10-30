import { Command, IPizza } from './types';

class AddIngredientCommand implements Command {
  private pizza: IPizza;
  private readonly ingredient: string;

  constructor(pizza: IPizza, ingredient: string) {
    this.pizza = pizza;
    this.ingredient = ingredient;
  }

  execute(): void {
    this.pizza.addIngredient(this.ingredient);
  }
}

export class AddCheeseCommand extends AddIngredientCommand {
  constructor(pizza: IPizza) {
    super(pizza, 'Cheese');
  }
}

export class AddBaconCommand extends AddIngredientCommand {
  constructor(pizza: IPizza) {
    super(pizza, 'Bacon');
  }
}

export class AddPineapplesCommand extends AddIngredientCommand {
  constructor(pizza: IPizza) {
    super(pizza, 'Pineapples');
  }
}

export class AddMushroomsCommand extends AddIngredientCommand {
  constructor(pizza: IPizza) {
    super(pizza, 'Mushrooms');
  }
}

export class AddShrimpCommand extends AddIngredientCommand {
  constructor(pizza: IPizza) {
    super(pizza, 'Shrimp');
  }
}

export class AddSalmonCommand extends AddIngredientCommand {
  constructor(pizza: IPizza) {
    super(pizza, 'Salmon');
  }
}