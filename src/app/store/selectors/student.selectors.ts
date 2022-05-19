import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStudent } from 'src/app/models/student.model';
import { StudentState } from '../reducers/student.reducer';

export const getStudentFeatureState =
  createFeatureSelector<StudentState>('studentReducer');

export const getStudents = createSelector(getStudentFeatureState, (state) => {
  console.log(state);
  return state.students;
});
