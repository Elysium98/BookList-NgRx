import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: IUser[] = [
    {
      id: '1',
      email: 'paul@gmail.com',
      password: 'test13',
      name: 'paul',
    },
    {
      id: '2',
      email: 'paul23@gmail.com',
      password: 'test23',
      name: 'alex',
    },
  ];

  currentUser: IUser = {} as IUser;

  private _usersSubject = new BehaviorSubject<IUser[]>(this.users);
  private _currentUserSubject = new BehaviorSubject(this.currentUser);

  users$ = this._usersSubject.asObservable();
  currentUser$ = this._currentUserSubject.asObservable();

  constructor() {}

  getUsers$(): Observable<IUser[]> {
    console.log(this._currentUserSubject);
    console.log(this.users$);
    return this._usersSubject;
  }

  getCurrentUser$(): Observable<IUser> {
    return this.currentUser$;
  }

  initializeUser(): Promise<any> {
    return new Promise((resolve) => {
      console.log(this._currentUserSubject.getValue());

      if (sessionStorage.getItem('user') !== null) {
        var user = JSON.parse(sessionStorage.getItem('user'));
        console.log('!!!!', sessionStorage.getItem('user'));
        if (this._currentUserSubject.getValue() !== null) {
          this.setCurrentUser(user);
        }
      }

      resolve(null);
    });
  }

  setCurrentUser(user: IUser) {
    this._currentUserSubject.next(user);
  }

  logout(): void {
    this._currentUserSubject.next(null);
    sessionStorage.removeItem('user');
  }

  signUp(user: IUser) {
    this.users.push(user);
  }
}
