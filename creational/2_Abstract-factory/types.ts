export enum FoodNationality {
  AMERICAN = 'AMERICAN',
  JAPANESE = 'JAPANESE',
  UKRAINIAN = 'UKRAINIAN'
}

export interface IKitchen {
  nationality: FoodNationality;
  getComplexDinner(): IComplexDinner;
}

export interface IComplexDinner {
  nationality: FoodNationality;
  getFirstDish(): IDish
  getSecondDish(): IDish
  getThirdDish(): IDish
}

export interface IDish {
  getName(): string;
}