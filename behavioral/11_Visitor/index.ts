import Pizza from './Pizza';
import {
  AddBaconOperation,
  AddCheeseOperation,
  AddMushroomsOperation,
  AddPineapplesOperation,
  AddSalmonOperation,
  AddShrimpOperation, BakeOperation,
} from './Visitor';
import { Visitor } from './types';

const pizza = new Pizza();

// add ingredients
const cheeseOperation = new AddCheeseOperation();
const ingredientsOperations: Visitor[] = [
  cheeseOperation,
  new AddBaconOperation(),
  new AddPineapplesOperation(),
  new AddMushroomsOperation(),
  new AddShrimpOperation(),
  new AddSalmonOperation(),
];

ingredientsOperations.forEach((ingredientOperation: Visitor) => {
  ingredientOperation.visit(pizza);
});

// bake pizza
const bakeOperation = new BakeOperation();
bakeOperation.visit(pizza);

console.info('-------------------------');

// one more case (with name and several same ingredients)
const cheesePizza = new Pizza();

// add cheese 4 times
cheeseOperation.visit(cheesePizza);
cheeseOperation.visit(cheesePizza);
cheeseOperation.visit(cheesePizza);
cheeseOperation.visit(cheesePizza);

bakeOperation.visit(cheesePizza, { pizzaName: 'Extra CHEESE' });