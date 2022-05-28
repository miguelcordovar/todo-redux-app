import { ActionReducerMap } from "@ngrx/store";
import { filterType } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reduce";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState {
  todos: Todo[],
  filter: filterType
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
