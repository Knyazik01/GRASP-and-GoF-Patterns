import Context from './Context';
import { BubbleSortStrategy, QuickSortStrategy } from './Strategy';

const array = [7, 6, 5, 2, 9, 7, 0, 5, 1];
const bubbleSortStrategy = new BubbleSortStrategy();
const context = new Context(bubbleSortStrategy);

console.info('-----------------------');

console.info(context.sort(array).join(' '));

console.info('-----------------------');

const quickSortStrategy = new QuickSortStrategy();
context.setStrategy(quickSortStrategy);

console.info(context.sort(array).join(' '));