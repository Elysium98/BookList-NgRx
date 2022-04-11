import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IBook } from 'src/app/models/books.model';


 
export const selectBooks = createFeatureSelector<ReadonlyArray<IBook>>('books');
 
export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectDetailState = createFeatureSelector<ReadonlyArray<string>>('detail');
 
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);

export const selectDetail = createSelector(
  selectBooks,
  selectDetailState,
  (books, detail) => {
    return detail.map((id) => books.find((book) => book.id === id));
  }
);