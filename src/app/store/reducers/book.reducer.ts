import { createReducer, on } from '@ngrx/store';
import { IBook } from 'src/app/models/book.model';
import *  as BookActions from '../actions/book.actions'

export interface BookState {
  books: IBook[];
  currentBook: IBook;
}

const initialState: BookState = {
  books: [
    {
      id: '1',
      volumeInfo: {
        title: 'BOOK_1.TITLE',
        author: 'BOOK_1.AUTHOR',
        publisher: 'BOOK_1.PUBLISHER',
        publisherDate: '2016-01-27',
        language: 'RO',
        volume: 2,
        pageNumber: 333,
      },
      ratingStar: 3,
    },
    {
      id: '2',
      volumeInfo: {
        title: 'BOOK_2.TITLE',
        author: 'BOOK_2.AUTHOR',
        publisher: 'BOOK_2.PUBLISHER',
        publisherDate: '2020-01-19',
        language: 'RO',
        volume: 2,
        pageNumber: 333,
      },
      ratingStar: 4,
    },
    {
      id: '3',
      volumeInfo: {
        title: 'BOOK_3.TITLE',
        author: 'BOOK_3.AUTHOR',
        publisher: 'BOOK_3.PUBLISHER',
        publisherDate: '2020-01-27',
        language: 'RO',
        volume: 2,
        pageNumber: 333,
      },
      ratingStar: 5,
    },
    {
      id: '4',
      volumeInfo: {
        title: 'Capra cu trei iezi',
        author: 'Ion Creanga',
        publisher: 'Humanitas',
        publisherDate: '2019-01-27',
        language: 'RO',
        volume: 2,
        pageNumber: 333,
      },
      ratingStar: 5,
    },
    {
      id: '4',
      volumeInfo: {
        title: 'Capra cu trei iezi',
        author: 'Ion Creanga',
        publisher: 'Humanitas',
        publisherDate: '2019-01-27',
        language: 'RO',
        volume: 2,
        pageNumber: 333,
      },
      ratingStar: 5,
    },
    {
      id: '4',
      volumeInfo: {
        title: 'Capra cu trei iezi',
        author: 'Ion Creanga',
        publisher: 'Humanitas',
        publisherDate: '2019-01-27',
        language: 'RO',
        volume: 2,
        pageNumber: 333,
      },
      ratingStar: 5,
    },
    {
      id: '4',
      volumeInfo: {
        title: 'Capra cu trei iezi',
        author: 'Ion Creanga',
        publisher: 'Humanitas',
        publisherDate: '2019-01-27',
        language: 'RO',
        volume: 2,
        pageNumber: 333,
      },
      ratingStar: 5,
    },
  ],
  currentBook: null
};


export const booksReducer = createReducer(
  initialState,
  on(BookActions.setCurrentBook, (state, action): BookState => {
    return {
      ...state,
      currentBook: action.book,
    };
  })
);
// export const booksReducer = createReducer(initialState);


