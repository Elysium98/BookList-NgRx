import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup;
  idCount: number = 2;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.signupFormGroup = this.fb.group({
      id: this.generateId().toString(),
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$!%^*?&])[A-Za-zd#@$!%^*?&].{6,}'
          ),
        ],
      ],
      name: ['', Validators.required],
    });
  }

  signUp() {
    this.userService.signUp(this.signupFormGroup.value);

    this.signupFormGroup.reset();
    this.router.navigate(['/login']);
  }

  generateId() {
    this.idCount++;
    return this.idCount;
  }

  onSubmit() {
    this.signUp();
  }
}
