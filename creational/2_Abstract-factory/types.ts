export enum FoodNationality {
  AMERICAN = 'AMERICAN',
  JAPANESE = 'JAPANESE',
  UKRAINIAN = 'UKRAINIAN'
}

export enum DishType {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
  THIRD = 'THIRD'
}

export interface IKitchen {
  nationality: FoodNationality;
  getComplexDinner(): IComplexDinner;
}

export interface IComplexDinner {
  nationality: FoodNationality;
  getDish(dishType: DishType): IDish
}

export interface IDish {
  getName(): string;
}