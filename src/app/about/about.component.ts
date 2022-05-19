import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStudent } from '../models/student.model';
import { StudentService } from '../services/student.service';
import { StudentState } from '../store/reducers/student.reducer';
import { getStudents } from '../store/selectors/student.selectors';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  students$: Observable<IStudent[]>;

  constructor(private store: Store<StudentState>) {}

  ngOnInit(): void {
    this.students$ = this.store.select(getStudents);
  }
}
