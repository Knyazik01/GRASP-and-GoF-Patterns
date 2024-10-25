import { BaconDecorator, CheeseDecorator, MushroomsDecorator, PineapplesDecorator, SalmonDecorator, ShrimpDecorator } from './decorators';
import Pizza from './Pizza';

const pizza = new ShrimpDecorator(
  new SalmonDecorator(
    new Pizza(),
  ));
const extraCheesePizza = new CheeseDecorator(
  new CheeseDecorator(
    new CheeseDecorator(
      new CheeseDecorator(
        new Pizza(),
      ),
    ),
  ));

const allIncludedPizza = new CheeseDecorator(
  new BaconDecorator(
    new PineapplesDecorator(
      new MushroomsDecorator(
        new ShrimpDecorator(
          new SalmonDecorator(
            new Pizza(),
          ))))));

console.info('----------------------');
console.info(pizza.bake('Sea time'));
console.info('----------------------');
console.info(extraCheesePizza.bake('EXTRA Cheese'));
console.info('----------------------');
console.info(allIncludedPizza.bake('All at ones'));
console.info('----------------------');