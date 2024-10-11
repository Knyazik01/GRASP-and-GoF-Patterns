import { FoodNationality, IComplexDinner, IDish } from './types';
import { ApplePie, Borshch, ClamChowder, GoldDragon, GreenDragon, Holubtsi, RedDragon, RoastedTurkey, Syrnyky } from './Dish';

// National Complex Dinners - these are FACTORIES
class JapaneseComplexDinner implements IComplexDinner {
  public readonly nationality = FoodNationality.JAPANESE;

  getFirstDish(): IDish {
    return new GoldDragon();
  }

  getSecondDish(): IDish {
    return new GreenDragon();
  }

  getThirdDish(): IDish {
    return new RedDragon();
  }
}

class AmericanComplexDinner implements IComplexDinner {
  public readonly nationality = FoodNationality.AMERICAN;

  getFirstDish(): IDish {
    return new ClamChowder();
  }

  getSecondDish(): IDish {
    return new RoastedTurkey();
  }

  getThirdDish(): IDish {
    return new ApplePie();
  }
}

class UkrainianComplexDinner implements IComplexDinner {
  public readonly nationality = FoodNationality.UKRAINIAN;

  getFirstDish(): IDish {
    return new Borshch();
  }

  getSecondDish(): IDish {
    return new Holubtsi();
  }

  getThirdDish(): IDish {
    return new Syrnyky();
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