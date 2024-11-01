import { IStrategy } from './types';

export class BubbleSortStrategy implements IStrategy {
  sort(array: number[]): number[] {
    console.info('BubbleSortStrategy');

    const result = [...array];
    if (result.length < 2) return result;
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;

      for (let index = 0; index < result.length; index++) {
        if (result[index] > result[index + 1]) {
          isSorted = false;
          [result[index], result[index + 1]] = [result[index + 1], result[index]];
        }
      }
    }
    return result;
  }
}

export class QuickSortStrategy implements IStrategy {
  private partition(array: number[], left: number = 0, right: number = array.length - 1): number {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }

      while (array[j] > pivot) {
        j--;
      }

      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
      }
    }

    return i;
  }

  private recursiveSort(array: number[], left: number = 0, right: number = array.length - 1): number[] {
    if (array.length > 1) {
      const index = this.partition(array, left, right);

      if (left < index - 1) {
        this.recursiveSort(array, left, index - 1);
      }

      if (index < right) {
        this.recursiveSort(array, index, right);
      }
    }

    return array;
  }

  sort(array: number[]): number[] {
    console.info('QuickSortStrategy');
    const result = [...array];
    return this.recursiveSort(result);
  }
}