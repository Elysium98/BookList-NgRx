import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';
import { BooksService } from '../services/book.service';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { Store } from '@ngrx/store';
import * as BookActions from '../store/actions/book.actions';
import { getBooks } from '../store/selectors/book.selectors';
import { getCurrentUser } from '../store/selectors/user.selectors';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  starCount: number = 5;
  rating: number;
  books$: Observable<IBook[]>;
  // books$ = this.booksService.getBooks$();
  // books$ = this.store.select(getBooks);
  book$: Observable<IBook>;
  user$: Observable<IUser>;
  // user$: Observable<IUser> = this.userService.currentUser$;
  user: string;
  testBook: IBook;

  constructor(
    private booksService: BooksService,
    private userService: UserService,
    public dialog: MatDialog,
    private store: Store
  ) {
    this.user$ = this.store.select(getCurrentUser);
  }

  ngOnInit(): void {
    this.books$ = this.store
      .select(getBooks)
     // .pipe(tap((data) => console.log(data)));

   
  }

  getBook(id: string): void {
   this.book$ = this.booksService.getBookById$(id);
    this.book$.subscribe((data) => (this.testBook = data));
    const book = this.testBook
    this.store.dispatch(BookActions.setCurrentBook({ book}));
    console.log(this.testBook);
  }

//     getBook(book: IBook): void {
//  this.store.dispatch(BookActions.setCurrentBook({ book}))
//   }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
      width: '220px',
      height: '150px',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  onBookUpdated(book: IBook) {
    this.booksService.updateBook(book);
  }

  getBooks() {
    this.booksService.getBooks$();
  }

  onRatingUpdated(rating: number) {
    this.rating = rating;
  }
}
