import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import * as State from '../state/app.state';
import { IUser } from 'src/app/models/user.model';
import *  as UserActions from '../actions/user.actions'
export interface UserState {
  users: IUser[];
  currentUser: IUser;
}

const initialState: UserState = {
  users: [
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
  ],
  currentUser: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.setCurrentUser, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.user,
    };
  })
);
