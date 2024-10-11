import { Kitchen } from './Kitchen';
import { FoodNationality, IComplexDinner, IDish } from './types';

class Cafe {
  public cookComplexDinner(nationality: FoodNationality) {
    // set kitchen nationality
    const kitchen = new Kitchen(nationality);

    // request complex dinner for this kitchen
    return kitchen.getComplexDinner();
  }
}

// Cafe code
const cafe = new Cafe();
const complexDinner1 = cafe.cookComplexDinner(FoodNationality.JAPANESE);
const complexDinner2 = cafe.cookComplexDinner(FoodNationality.AMERICAN);
const complexDinner3 = cafe.cookComplexDinner(FoodNationality.UKRAINIAN);

[complexDinner1, complexDinner2, complexDinner3].forEach((complexDinner: IComplexDinner) => {
  console.info('--------------------------');
  console.info(complexDinner.nationality);

  const firstDish: IDish = complexDinner.getFirstDish();
  const secondDish: IDish = complexDinner.getSecondDish();
  const thirdDish: IDish = complexDinner.getThirdDish();

  [firstDish, secondDish, thirdDish]
    .forEach((dish, index) => {
      console.info(index + 1, dish.getName());
    });

  console.info('--------------------------');
});