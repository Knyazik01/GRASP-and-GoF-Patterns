import { FoodNationality, IKitchen } from './types';
import { ComplexDinnerCreator } from './ComplexDinner';

export class Kitchen implements IKitchen {
  public readonly nationality: FoodNationality;

  constructor(nationality: FoodNationality) {
    // save nationality and complexDinner based on nationality
    this.nationality = nationality;
  }

  public getComplexDinner() {
    return ComplexDinnerCreator.getComplexDinner(this.nationality);
  }
}