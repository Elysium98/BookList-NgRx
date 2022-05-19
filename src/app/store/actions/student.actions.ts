import { createAction, props } from "@ngrx/store";
import { IStudent } from "src/app/models/student.model";

export const getStudents = createAction(
    '[Book List] Retrieve Students',
    props<{ student: IStudent[] }>()
  );