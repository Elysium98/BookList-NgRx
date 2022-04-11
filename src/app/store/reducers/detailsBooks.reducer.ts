import { createReducer, on } from '@ngrx/store';
import { showDetail } from '../actions/books.action';

 
export const initialState: ReadonlyArray<string> = [];
 
export const detailsBooksReducer = createReducer(
  initialState,
  on(showDetail, (state, { bookId }) => state.filter((id) => id !== bookId)),
);