import { IBook, IBookList, IIterator } from './types';

class BookIterator<K extends keyof IBook> implements IIterator<IBook[K]> {
  private index: number = 0;
  private readonly sortedItems: IBook[K][] = [];
  private finished = false;

  constructor (booksList: IBookList, key: K) {
    this.sortedItems = booksList.getBooks()
      .map((book) => book[key])
      .sort((a, b) => (
        (typeof a === 'number' && typeof b === 'number')
          ? (a - b)
          : a.toString().localeCompare(b.toString())
      ));

    this.finished = this.sortedItems.length === 0;
  }

  next(): IBook[K] {
    if (this.isFinished()) return null;

    const currentItem = this.sortedItems[this.index];

    // update index and finished field
    this.index += 1;
    this.finished = this.index >= this.sortedItems.length;

    return currentItem;
  }

  isFinished(): boolean {
    return this.finished;
  }
}

export class BookIteratorFabric {
  static getAuthorIterator(booksList: IBookList): IIterator<IBook['author']> {
    return new BookIterator<'author'>(booksList, 'author');
  }

  static getTitleIterator(booksList: IBookList): IIterator<IBook['title']> {
    return new BookIterator<'title'>(booksList, 'title');
  }

  static getYearIterator(booksList: IBookList): IIterator<IBook['year']> {
    return new BookIterator<'year'>(booksList, 'year');
  }
}