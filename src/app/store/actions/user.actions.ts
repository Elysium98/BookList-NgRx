import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/models/user.model";

export const setCurrentUser = createAction(
    '[User] Set Current User',
    props<{ user: IUser }>()
  );