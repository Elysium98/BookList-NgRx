
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, of } from "rxjs";

import { BooksService } from "src/app/services/book.service";
import * as BookActions from '../actions/book.actions';

@Injectable()
export class BookEffects{
    constructor(
        private bookService: BooksService,
        private actions$: Actions){}

        // loadBooks$ = createEffect(() => {
        //     return this.actions$
        //       .pipe(
        //         ofType(BookActions.loadBooks),
        //         mergeMap(() => this.bookService.getBooks()
        //           .pipe(
        //             map(books => BookActions.loadBooksSuccess({ books })),
        //             catchError(error => of(BookActions.loadBooksFailure({ error })))
        //           )
        //         )
        //       );
        //   });

    
}