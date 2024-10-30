import { Pizza } from './Pizza';
import {
  AddBaconCommand,
  AddCheeseCommand,
  AddMushroomsCommand,
  AddPineapplesCommand,
  AddSalmonCommand,
  AddShrimpCommand,
} from './Commands';
import { Command } from './types';

class PizzaInvoker {
  private commands: Command[] = [];

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  makePizza(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }
}

// Example usage
const pizza = new Pizza();
const pizzaInvoker = new PizzaInvoker();

// Custom recipe from user
pizzaInvoker.addCommand(new AddCheeseCommand(pizza));
pizzaInvoker.addCommand(new AddBaconCommand(pizza));
pizzaInvoker.addCommand(new AddPineapplesCommand(pizza));
pizzaInvoker.addCommand(new AddMushroomsCommand(pizza));
pizzaInvoker.addCommand(new AddShrimpCommand(pizza));
pizzaInvoker.addCommand(new AddSalmonCommand(pizza));

// Prepare the pizza
pizzaInvoker.makePizza();
console.info(pizza.getIngredients());
