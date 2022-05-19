import { createAction, props } from '@ngrx/store';
import { IBook } from 'src/app/models/book.model';


export const showDetail = createAction(
  '[Book List] Details Book',
  props<{ bookId: string }>()
);

export const setCurrentBook = createAction(
  '[Book] Set Current Book',
  props<{ book: IBook }>()
);

export const loadBooks = createAction(
  '[Book] Load'
);

export const loadBooksSuccess = createAction(
  '[Book] Load Success',
  props<{ books: IBook[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Fail',
  props<{ error: string }>()
);
