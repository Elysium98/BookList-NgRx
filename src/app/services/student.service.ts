import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import i18next from 'i18next';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IBook } from '../models/books.model';
import { IStudent } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private studentsUrl = 'api/students/students.json';
  students: IStudent[];

  constructor(private http: HttpClient) {}

  initializeAppFactory() {
    return this.http
      .get<IStudent[]>(this.studentsUrl)
      .pipe(tap((data) => (this.students = data)));
  }
}
