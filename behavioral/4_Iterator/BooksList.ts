import { IBook, IBookList } from './types';

class BooksList implements IBookList {
  private books: IBook[] = [];

  addBook(book: IBook): void {
    this.books.push(book);
  }

  getBooks(): IBook[] {
    return this.books;
  }
}

export default BooksList;