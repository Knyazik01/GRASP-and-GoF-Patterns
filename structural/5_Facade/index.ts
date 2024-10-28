import Facade from './Facade';

const facade = new Facade();

Promise.all([
              facade.add(4, 5), // 4 + 5 = 9
              facade.multiply(4, 5), // 4 * 5 = 20
              facade.divide(4, 5), // 4 / 5 = 0.8 ~> 1
              facade.divide(2, 5), // 2 / 5 = 0.4 ~> 0
              facade.subtract(4, 5), // 4 - 5 = -1
            ]).then(results => (
  results.forEach(item => console.log(item))),
);