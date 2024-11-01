import { ColdBakeState } from './State';
import Bake from './Bake';

const b = new ColdBakeState();
const bake = new Bake();

try {
  bake.bake();
} catch (e) {
  console.info(e.message);
  // Baking not allowed: Temperature is too low
}

console.info('--------------------------');

b.raiseTemperature(bake);
bake.bake();

console.info('--------------------------');
b.raiseTemperature(bake);
try {
  bake.bake();
} catch (e) {
  console.info(e.message);
  // Baking not allowed: Temperature is too high
}

console.info('--------------------------');

try {
  b.raiseTemperature(bake);
} catch (e) {
  console.info(e.message);
  // Cannot raise the temperature: Current state is 'Overheating'
}

console.info('--------------------------');

b.reduceTemperature(bake);
b.reduceTemperature(bake);

console.info('--------------------------');

try {
  b.reduceTemperature(bake);
} catch (e) {
  console.info(e.message);
  // Cannot raise the temperature: Current state is 'Cold'
}