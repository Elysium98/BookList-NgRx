import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { BookGuard } from './services/book.guard';

import { LoginGuard } from './services/login.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'bookList', canActivate: [BookGuard], component: BookListComponent },
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bookList/:id', component: BookDetailComponent },
  { path: '**', redirectTo: '/bookList' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
