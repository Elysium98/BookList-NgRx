import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import i18next from 'i18next';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IBook } from '../models/books.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  books: IBook[] = [
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
  ];

  private _booksSubject = new BehaviorSubject<IBook[]>(this.books);
  books$ = this._booksSubject.asObservable();

  constructor(private http: HttpClient) {}

  getBooks$(): Observable<IBook[]> {
    return this._booksSubject;
  }

  getBookById$(id: string): Observable<IBook> {
    return this.getBooks$().pipe(
      map((books: IBook[]) => books.find((book) => book.id === id))
    );
  }

  updateBook(book: IBook) {
    var result = this._booksSubject.getValue().map((x: IBook) => {
      if (x.id === book.id) {
        return book;
        // x.ratingStar = book.ratingStar
      }
      return x;
    });
    this._booksSubject.next(result);
  }
}
