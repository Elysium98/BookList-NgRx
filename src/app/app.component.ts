import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBook } from './models/books.model';
import { BooksService } from './services/books.service';
import {
  addBook,
  removeBook,
  retrievedBookList,
  showDetail,
} from './store/actions/books.action';
import {
  selectBookCollection,
  selectBooks,
  selectDetail,
} from './store/selectors/books.selectors';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './services/user.service';
import { IUser } from './models/user.model';
import { IStudent } from './models/student.model';
import { StudentService } from './services/student.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-list';

  books$ = this.store.select(selectBooks);
  booksDetails$ = this.store.select(selectDetail);
  bookCollection$ = this.store.select(selectBookCollection);
  errorMessage: any;
  books: IBook[] = [];
  users: any = [];

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  onDetail(bookId: string) {
    this.store.dispatch(showDetail({ bookId }));
  }

  constructor(
    private booksService: BooksService,
    private userService: UserService,
    private store: Store,
    public translate: TranslateService
  ) {
    console.log('inside app component');
    translate.addLangs(['en', 'fr']);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    // this.booksService.getBooks$().subscribe({
    //   next: books => this.books = books,
    //   error: err => this.errorMessage = err
    // });
    //  this.booksService.getBooks$()
    //   .subscribe((books) => {
    //     console.log('on NgOnInit', books);
    //     return this.store.dispatch(retrievedBookList({ books }));
    //   });
  }
}
