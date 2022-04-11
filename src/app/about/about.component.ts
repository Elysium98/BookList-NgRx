import { Component, OnInit } from '@angular/core';
import { IStudent } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  students: IStudent[];
  constructor(private studentService: StudentService) {
    this.students = studentService.students;
  }
}
