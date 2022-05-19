import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';
import * as UserActions from '../store/actions/user.actions';
import { getCurrentUser } from '../store/selectors/user.selectors';
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
    private userService: UserService,
    private store: Store
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

      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));

        this.store.dispatch(UserActions.setCurrentUser({ user }));

        this.router.navigate(['/bookList']);
        this.loginFormGroup.reset();
      } else {
        sessionStorage.setItem('user', null);

        alert('user not found !');
      }
    });
  }

  onSubmit() {
    this.login();
  }
}
