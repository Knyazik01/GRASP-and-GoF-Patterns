export enum AutoTypeEnum {
  CAR = 'CAR',
  TRUCK = 'TRUCK',
  MINIVAN = 'MINIVAN',
}

export interface IAuto {
  type: AutoTypeEnum;
  color: string;
  vin: string;
  cloneCar(vin: IAuto['vin'], color?: IAuto['color']): IAuto;
  cloneTruck(vin: IAuto['vin'], color?: IAuto['color']): IAuto;
  cloneMinivan(vin: IAuto['vin'], color?: IAuto['color']): IAuto;
}