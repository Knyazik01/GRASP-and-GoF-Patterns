import { Baking, BakingType } from './baking';
import { BakingCreator } from './factory';

class Stove {
  bake() {
    const bread: Baking = BakingCreator.createBaking(BakingType.Bread);
    const pancake: Baking = BakingCreator.createBaking(BakingType.Pancake);
    const cookie: Baking = BakingCreator.createBaking(BakingType.Cookie);

    // show names
    [bread, pancake, cookie].forEach(bakingItem => {
      console.log(bakingItem.getName());
    });
  }
}

// main code
const stove = new Stove();
stove.bake();