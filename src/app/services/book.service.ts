import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import i18next from 'i18next';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IBook } from '../models/book.model';

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

  booksUrl = 'api/books.json'


  constructor(private http: HttpClient) {}

  // getBooks(): Observable<IBook[]> {
  //   return this.http.get<IBook[]>(this.booksUrl)
  //     .pipe(
  //       tap(data => console.log(JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }

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


  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
