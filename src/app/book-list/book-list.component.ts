import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/books.model';
import { BooksService } from '../services/books.service';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  starCount: number = 5;
  rating: number;
  books$ = this.booksService.books$;
  book$: Observable<IBook>;
  user$: Observable<IUser> = this.userService.currentUser$;
  user: string;
  testBook: IBook;

  constructor(
    private booksService: BooksService,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBook(id: string): void {
    this.book$ = this.booksService.getBookById$(id);
    this.book$.subscribe((data) => (this.testBook = data));
    console.log(this.testBook);
  }

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
    this.booksService.getBooks$().pipe(tap(console.log));
  }

  onRatingUpdated(rating: number) {
    this.rating = rating;
  }
}
