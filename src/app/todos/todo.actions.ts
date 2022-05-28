import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create', props<{text: string}>());
export const toggle = createAction('[TODO] Toggle', props<{id: number}>());
export const toggleAll = createAction('[TODO] ToggleAll', props<{completed: boolean}>());
export const clearCompleted = createAction('[TODO] Clear Completed');
export const edit = createAction('[TODO] Edit', props<{id: number, text: string}>());
export const deleteTodo = createAction('[TODO] Delete', props<{id: number}>());


