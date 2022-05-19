import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { AppState } from "../state/app.state";

export const hydrationMetaReducer = (
    reducer: ActionReducer<AppState>
  ): ActionReducer<AppState> => {
    return (state, action) => {
      console.log(action.type)
      if (action.type === INIT ) {
        const storageValue = localStorage.getItem("state");
        if (storageValue) {
          try {
            return JSON.parse(storageValue);
          } catch {
            localStorage.removeItem("state");
          }
        }
      }
      const nextState = reducer(state, action);
      localStorage.setItem("state", JSON.stringify(nextState));
      return nextState;
    };
  };
  