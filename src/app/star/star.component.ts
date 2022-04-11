import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() starCount: number = 5;
  @Output() ratingUpdated = new EventEmitter();
  @Input() readOnly: Boolean;

  ratingArr: number[] = [];

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(rating: number) {
    this.rating = rating + 1;
    this.ratingUpdated.emit(this.rating);
  }
}
