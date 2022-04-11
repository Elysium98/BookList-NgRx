import { createAction, props } from '@ngrx/store';
import { IBook } from 'src/app/models/books.model';

 
export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);
 
export const showDetail = createAction(
  '[Book List] Details Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);
 
export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: IBook[ ]}>()
);