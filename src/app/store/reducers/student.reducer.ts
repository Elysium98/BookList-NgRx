import {
  createFeatureSelector,
  createReducer,
  createSelector,
} from '@ngrx/store';
import { IStudent } from 'src/app/models/student.model';
import * as State from '../state/app.state';
import studentsData from '../../../api/students/students.json';

export interface StudentState {
  students: IStudent[];
}

const initialState: StudentState = {
  students: studentsData,
};

export const studentReducer = createReducer(initialState);
