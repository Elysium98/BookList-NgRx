import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const getUserFeatureState =
  createFeatureSelector<UserState>('userReducer');

export const getUsers = createSelector(getUserFeatureState, (state) => {
  return state.users;
});

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);