import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { clearCompleted, create, deleteTodo, edit, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Ver TV')
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
  on(toggle, (state, {id}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, {id, text}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text,
        }
      } else {
        return todo;
      }
    });
  }),
  on(deleteTodo, (state, {id}) => state.filter(todo => todo.id != id)),
  on(toggleAll, (state, {completed}) => {
    return state.map(todo => {
      return {
        ...todo,
        completed: completed
      }
    });
  }),
  on(clearCompleted, state => state.filter(todo => !todo.completed)),
);
