import { DishType, FoodNationality, IComplexDinner, IDish } from './types';
import { ApplePie, Borshch, ClamChowder, GoldDragon, GreenDragon, Holubtsi, RedDragon, RoastedTurkey, Syrnyky } from './Dish';

// National Complex Dinners - these are FACTORIES
class JapaneseComplexDinner implements IComplexDinner {
  public readonly nationality = FoodNationality.JAPANESE;

  getDish(dishType: DishType): IDish {
    if (dishType === DishType.FIRST) return new GoldDragon();
    if (dishType === DishType.SECOND) return new GreenDragon();
    if (dishType === DishType.THIRD) return new RedDragon();
  }
}

class AmericanComplexDinner implements IComplexDinner {
  public readonly nationality = FoodNationality.AMERICAN;

  getDish(dishType: DishType): IDish {
    if (dishType === DishType.FIRST) return new ClamChowder();
    if (dishType === DishType.SECOND) return new RoastedTurkey();
    if (dishType === DishType.THIRD) return new ApplePie();
  }
}

class UkrainianComplexDinner implements IComplexDinner {
  public readonly nationality = FoodNationality.UKRAINIAN;

  getDish(dishType: DishType): IDish {
    if (dishType === DishType.FIRST) return new Borshch();
    if (dishType === DishType.SECOND) return new Holubtsi();
    if (dishType === DishType.THIRD) return new Syrnyky();
  }
}

// ComplexDinner Factory - THIS IS AN ABSTRACT FACTORY
// This returns another factory - <NATIONAL>ComplexDinner
export class ComplexDinnerCreator {
  static getComplexDinner(nationality: FoodNationality): IComplexDinner {
    if (nationality === FoodNationality.JAPANESE) return new JapaneseComplexDinner();
    if (nationality === FoodNationality.AMERICAN) return new AmericanComplexDinner();
    if (nationality === FoodNationality.UKRAINIAN) return new UkrainianComplexDinner();
  }
}