import { IBook } from "src/app/models/books.model";


export interface AppState {
  books: IBook[];
  collection: ReadonlyArray<string>;
  detail: ReadonlyArray<string>;
}