import { MetaReducer } from "@ngrx/store";
import { IBook } from "src/app/models/book.model";
import { IStudent } from "src/app/models/student.model";
import { hydrationMetaReducer } from "../hydration/hydration.reducer";
import { BookState } from "../reducers/book.reducer";
import { StudentState } from "../reducers/student.reducer";
import { UserState } from "../reducers/user.reducer";


export interface AppState {
  students: StudentState;
  books: BookState;
  users: UserState;
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];