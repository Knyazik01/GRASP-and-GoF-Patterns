import CacheProxy from './CacheProxy';
import Facade from '../5_Facade/Facade';
import { IFacade } from '../5_Facade/types';

const cacheFacade: IFacade = new CacheProxy(new Facade());

const main = (): Promise<number[]> => (
  Promise.all([
    cacheFacade.add(4, 5), // 4 + 5 = 9
    cacheFacade.multiply(4, 5), // 4 * 5 = 20
    cacheFacade.divide(4, 5), // 4 / 5 = 0.8 ~> 1
    cacheFacade.divide(2, 5), // 2 / 5 = 0.4 ~> 0
    cacheFacade.subtract(4, 5), // 4 - 5 = -1
  ])
);

const logResults = (results: unknown[]): void => {
  results.forEach(item => console.log(item));
}

main()
  .then(results => {
    logResults(results);

    // check cache (we'll see cached messages in console)
    main().then(logResults);
  });