import { createAction, props } from '@ngrx/store';

export type filterType = 'all' | 'completed' | 'pending';

export const setFilter = createAction('[Filter Component] Set Filter', props<{filter: filterType}>());
