import { Pizza } from '../2_Command/Pizza';
import { Command } from '../2_Command/types';
import {
  AddBaconCommand,
  AddCheeseCommand,
  AddMushroomsCommand,
  AddPineapplesCommand,
  AddSalmonCommand,
  AddShrimpCommand,
} from '../2_Command/Commands';
import { PizzaInvoker } from '../2_Command/Invoker';

export class RecipeParser {
  private static ingredientCommands: { [key: string]: new (pizza: Pizza) => Command } = {
    Cheese: AddCheeseCommand,
    Bacon: AddBaconCommand,
    Pineapples: AddPineapplesCommand,
    Mushrooms: AddMushroomsCommand,
    Shrimp: AddShrimpCommand,
    Salmon: AddSalmonCommand,
  };

  public static parse(recipe: string, pizza: Pizza, invoker: PizzaInvoker): void {
    const ingredients = recipe.split('+').map(ingredient => ingredient.trim());

    ingredients.forEach(ingredient => {
      const AddCommandClass = this.ingredientCommands[ingredient];
      if (AddCommandClass) {
        invoker.addCommand(new AddCommandClass(pizza));
      } else {
        throw new Error(`Unknown ingredient: ${ingredient}`);
      }
    });
  }
}