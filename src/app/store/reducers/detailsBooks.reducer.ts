import { createReducer, on } from '@ngrx/store';
import { IBook } from 'src/app/models/book.model';
import { showDetail } from '../actions/book.actions';

 
export const initialState: ReadonlyArray<string> = [];
 
export const detailsBooksReducer = createReducer(
  initialState,
  on(showDetail, (state, { bookId }) => state.filter((id) => id !== bookId)),
);


