import { createReducer, on } from '@ngrx/store';
import { filterType, setFilter } from './filter.actions';

export const initialState: filterType = 'all';

export const filterReducer = createReducer<filterType>(
  initialState,
  on(setFilter, (state, { filter }) => filter),
);
