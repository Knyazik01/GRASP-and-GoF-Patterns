import BooksList from './BooksList';
import Book from './Book';
import { BookIteratorFabric } from './BookIterator';
import { IBook, IIterator } from './types';

const booksList = new BooksList();

booksList.addBook(new Book('Robert Lewis Stevenson', 'Treasure Island', 2019));
booksList.addBook(new Book('Vsevolod Nestayko', 'Bullfighters from Vasyukivka', 2007));
booksList.addBook(new Book('Antoine de Saint-Exupery', 'The little prince', 2001));
booksList.addBook(new Book('Ivan Franko', 'Painted fox', 2018));

const authorIterator: IIterator<IBook['author']> = BookIteratorFabric.getAuthorIterator(booksList);
const titleIterator: IIterator<IBook['title']> = BookIteratorFabric.getTitleIterator(booksList);
const yearIterator: IIterator<IBook['year']> = BookIteratorFabric.getYearIterator(booksList);

console.info('a:', authorIterator.next()); // a: Antoine de Saint-Exupery
console.info('a:', authorIterator.next()); // a: Ivan Franko
console.info('a:', authorIterator.next()); // a: Robert Lewis Stevenson

console.info('t:', titleIterator.next()); // t: Bullfighters from Vasyukivka
console.info('t:', titleIterator.next()); // t: Painted fox

console.info('y:', yearIterator.next()); // 2001

while (!authorIterator.isFinished()) {
  console.info('a:', authorIterator.next());
  // a: Vsevolod Nestayko
}

while (!titleIterator.isFinished()) {
  console.info('t:', titleIterator.next());
  // t: The little prince
  // t: Treasure Island
}

while (!yearIterator.isFinished()) {
  console.info('y:', yearIterator.next());
  // y: 2007
  // y: 2018
  // y: 2019
}