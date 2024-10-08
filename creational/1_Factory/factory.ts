import { Baking, BakingType, Bread, Cake, Cookie, Cupcake, Donut, Pancake, Pie } from './baking';

export class BakingCreator {
  static createBaking(type: BakingType): Baking {
    if (type === BakingType.Bread) return new Bread();
    if (type === BakingType.Cupcake) return new Cupcake();
    if (type === BakingType.Cake) return new Cake();
    if (type === BakingType.Pancake) return new Pancake();
    if (type === BakingType.Cookie) return new Cookie();
    if (type === BakingType.Pie) return new Pie();
    if (type === BakingType.Donut) return new Donut();

    throw new Error('Invalid type');
  }
}