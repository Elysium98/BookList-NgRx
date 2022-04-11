import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { booksReducer } from './store/reducers/books.reducer';
import { collectionReducer } from './store/reducers/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksService } from './services/books.service';
import { StarComponent } from './star/star.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { detailsBooksReducer } from './store/reducers/detailsBooks.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { UserService } from './services/user.service';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StudentService } from './services/student.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initializeApp(userService: UserService) {
  return (): Promise<any> => {
    return userService.initializeUser();
  };
}

export function appConfig(studentService: StudentService) {
  return () => {
    return studentService.initializeAppFactory();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
    BookDetailComponent,
    StarComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    MatConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTabsModule,
    MatDialogModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      details: detailsBooksReducer,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appConfig,
      deps: [StudentService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [UserService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
