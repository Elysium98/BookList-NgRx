import { createReducer, on } from '@ngrx/store';
import { IBook } from 'src/app/models/books.model';

import { retrievedBookList } from '../actions/books.action';


export const initialState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);