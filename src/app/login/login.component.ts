import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  users$: Observable<IUser[]>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.userService.getUsers$().subscribe((result) => {
      const user = result.find((user: IUser) => {
        return (
          user.email === this.loginFormGroup.value.email &&
          user.password === this.loginFormGroup.value.password
        );
      });
      console.log('User at login', typeof user);
      this.userService.setCurrentUser(user);
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));

        this.router.navigate(['/bookList']);
        this.loginFormGroup.reset();
      } else {
        sessionStorage.setItem('user', null);
        // JSON.parse(sessionStorage.getItem('user'));

        alert('user not found !');
      }
    });
  }

  onSubmit() {
    this.login();
  }
}
