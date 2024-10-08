export interface Baking {
  getName(): string;
}

export enum BakingType {
  Bread = 'bread',
  Cupcake = 'cupcake',
  Cake = 'cake',
  Pancake = 'pancake',
  Cookie = 'cookie',
  Pie = 'pie',
  Donut = 'donut',
}


export class Bread implements Baking {
  public getName() {
    return 'Bread';
  }
}

export class Cupcake implements Baking {
  getName() {
    return 'Cupcake';
  }
}

export class Cake implements Baking {
  getName() {
    return 'Cake';
  }
}

export class Pancake implements Baking {
  getName() {
    return 'Pancake';
  }
}

export class Cookie implements Baking {
  getName() {
    return 'Cookie';
  }
}

export class Pie implements Baking {
  getName() {
    return 'Pie';
  }
}

export class Donut implements Baking {
  getName() {
    return 'Donut';
  }
}