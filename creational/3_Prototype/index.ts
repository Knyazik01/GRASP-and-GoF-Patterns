import { AutoTypeEnum, IAuto } from './types';

class AutoPrototype implements IAuto {
  public readonly type: AutoTypeEnum;
  public color: string;
  public vin: string;
  public prototype: AutoPrototype | null;

  private setColor(color: string) {
    this.color = color;
  }

  private setVIN(vin: string) {
    this.vin = vin;
  }

  // Object.create - to clone methods
  // Object.assign - to set type for car, as it cannot be changed later + keep same link to object
  cloneCar(vin: string, color = this.color): AutoPrototype {
    const clone = Object.assign(Object.create(this), {
      type: AutoTypeEnum.CAR,
      prototype: this,
    });

    clone.setVIN(vin);
    clone.setColor(color);

    return clone;
  }

  cloneTruck(vin: string, color = this.color): AutoPrototype {
    const clone = Object.assign(Object.create(this), {
      type: AutoTypeEnum.TRUCK,
      prototype: this,
    });

    clone.setVIN(vin);
    clone.setColor(color);

    return clone;
  }

  cloneMinivan(vin: string, color = this.color): AutoPrototype {
    const clone = Object.assign(Object.create(this), {
      type: AutoTypeEnum.MINIVAN,
      prototype: this,
    });

    clone.setColor(color);
    clone.setVIN(vin);

    return clone;
  }
}

const autoPrototype = new AutoPrototype();
const car = autoPrototype.cloneCar('1', 'red');
const truck = autoPrototype.cloneTruck('2', 'green');
const minivan = autoPrototype.cloneMinivan('3', 'black');

console.info(
  car, // CAR, red, 1
  truck, // TRUCK, green, 2
  minivan, // MINIVAN, black, 3
);

// all items have same prototype
console.info([car, truck, minivan].every(autoItem => autoItem.prototype === autoPrototype)); // true

const minivan2 = car.cloneMinivan('4');
console.info(minivan2); // MINIVAN, red, 4

console.info(minivan2.prototype === car); // true
console.info(minivan2.prototype === autoPrototype); // false
