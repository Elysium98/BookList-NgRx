import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../models/book.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: IBook[] = [];
  @Output() remove = new EventEmitter<string>();
}
