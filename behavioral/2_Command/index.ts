import { Pizza } from './Pizza';
import {
  AddBaconCommand,
  AddCheeseCommand,
  AddMushroomsCommand,
  AddPineapplesCommand,
  AddSalmonCommand,
  AddShrimpCommand,
} from './Commands';
import { PizzaInvoker } from './Invoker';

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
