import PizzaBuilder from './Builder';

const pizzaBuilder = new PizzaBuilder();
const pizza = pizzaBuilder
  .addCheese()
  .addMushrooms()
  .addCheese(5)
  .addCheese(-9)
  .addPineapples()
  .addMushrooms()
  .bake('Super cheese');
console.info(pizza);

console.info('----------------------');

const pizza2 = pizzaBuilder
  .addSalmon()
  .addShrimp()
  .bake('Sea time');
console.info(pizza2);