export enum AutoTypeEnum {
  CAR = 'CAR',
  TRUCK = 'TRUCK',
  MINIVAN = 'MINIVAN',
}

export interface IAuto {
  type: AutoTypeEnum;
  color: string;
  number: string;
  setColor(color: string): void;
  setNumber(number: string): void;
}