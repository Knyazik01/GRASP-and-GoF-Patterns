import { IBook } from './types';

class Book implements IBook {
    author: string;
    title: string;
    year: number;

    constructor(author: string, title: string, year: number) {
      this.author = author;
      this.title = title;
      this.year = year;
    }
}

export default Book;