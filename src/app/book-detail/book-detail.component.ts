import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { IBook } from '../models/book.model';
import { BooksService } from '../services/book.service';
import { getBooks, getCurrentBook } from '../store/selectors/book.selectors';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  @Input() books: ReadonlyArray<IBook> = [];
  @Input() bookToShow: IBook;
  @Output() updatedBook = new EventEmitter<IBook>();
  book$: Observable<IBook>;
  updatedRating: number = 0;
  starCount: number = 5;
  errorMessage: any;
  dataFormGroup: FormGroup;

  // bookToShow = this.store.select(selectDetail);
  constructor(private fb: FormBuilder, private bookService: BooksService, private store: Store) {
    this.book$ = this.store.select(getCurrentBook);
  }

  ngOnInit() {
    console.log(this.bookToShow);
  
    this.dataFormGroup = this.fb.group({
      date: this.bookToShow.volumeInfo.publisherDate,
      rating: [null],
    });
  }

  onSubmit(bookToShow: IBook) {
    console.log('Before ' + this.bookToShow.volumeInfo.publisherDate);
    this.bookToShow.volumeInfo.publisherDate = this.dataFormGroup.value.date;
    this.bookToShow.ratingStar = this.updatedRating;

    this.updatedBook.emit(bookToShow);

    console.log('After ' + this.dataFormGroup.value.date);
    console.log(this.bookToShow);
  }

  // saveRating(bookToShow: IBook) {
  //   this.bookToShow.ratingStar = this.updatedRating;
  //   this.updatedBook.emit(bookToShow);

  //   console.log(this.updatedRating);
  //   console.log(this.bookToShow);
  // }

  onRatingUpdated(rating: number) {
    console.log(rating);
    this.updatedRating = rating;
  }
}
