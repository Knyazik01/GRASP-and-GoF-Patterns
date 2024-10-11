import { AutoTypeEnum, IAuto } from './types';

class AutoPrototype implements IAuto {
  public readonly type: AutoTypeEnum;
  public color: string;
  public number: string;
  public prototype: AutoPrototype | null;

  public setColor(color: string) {
    this.color = color;
  }

  public setNumber(number: string) {
    this.number = number;
  }

  // Object.create - to clone methods
  // Object.assign - to set type for car, as it cannot be changed later + keep same link to object
  cloneCar(): AutoPrototype {
    return Object.assign(Object.create(this), { type: AutoTypeEnum.CAR, prototype: this });
  }

  cloneTruck(): AutoPrototype {
    return Object.assign(Object.create(this), { type: AutoTypeEnum.TRUCK, prototype: this });
  }

  cloneMinivan(): AutoPrototype {
    return Object.assign(Object.create(this), { type: AutoTypeEnum.MINIVAN, prototype: this });
  }
}

const autoPrototype = new AutoPrototype();
const car = autoPrototype.cloneCar();
const truck = autoPrototype.cloneTruck();
const minivan = autoPrototype.cloneMinivan();

car.setColor('red');
car.setNumber('1');

truck.setColor('green');
truck.setNumber('2');

minivan.setColor('black');
minivan.setNumber('3');

console.info(
  car, // CAR, red, 1
  truck, // TRUCK, green, 2
  minivan, // MINIVAN, black, 3
);

// all items have same prototype
console.info([car, truck, minivan].every(autoItem => autoItem.prototype === autoPrototype)); // true