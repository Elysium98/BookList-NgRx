import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IBook } from 'src/app/models/book.model';
import { BookState } from '../reducers/book.reducer';

export const getBookFeatureState = createFeatureSelector<BookState>('booksReducer');

export const selectDetailState = createFeatureSelector<ReadonlyArray<string>>('detail');

export const getBooks = createSelector(
  getBookFeatureState,
  (state) => {
    console.log(state);
    return state.books;
  }
);

export const getCurrentBook = createSelector(
  getBookFeatureState,
  state => state.currentBook
);

// export const getCurrentBookId = createSelector(
//   getBookFeatureState,
//   state => state.currentBookId
// )
// export const getCurrentBook = createSelector(
//   getBookFeatureState,
//   getCurrentBookId,
//   (state, currentBookId) => {
//     state.books.find(p => p.id === currentBookId)
//   }
// );

