export interface IBook {
  author: string;
  title: string;
  year: number;
}

export interface IIterator<T> {
  next(): T | null;
  isFinished(): boolean;
}

export interface IBookList {
  addBook(book: IBook): void;
  getBooks(): IBook[];
}