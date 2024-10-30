import { Pizza } from '../2_Command/Pizza';
import { PizzaInvoker } from '../2_Command/Invoker';
import { RecipeParser } from './RecipeParser';

const pizza = new Pizza();
const pizzaInvoker = new PizzaInvoker();

const customRecipe = 'Cheese + Bacon + Pineapples + Mushrooms + Shrimp + Salmon';

RecipeParser.parse(customRecipe, pizza, pizzaInvoker);

pizzaInvoker.makePizza();
console.info(pizza.getIngredients());