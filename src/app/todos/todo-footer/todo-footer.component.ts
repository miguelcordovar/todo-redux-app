import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filterType, setFilter } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {

  currentFilter: filterType = 'all';
  filters: filterType[] = ['all', 'completed', 'pending'];
  pending: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pending = state.todos.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(filter:filterType) {
    this.store.dispatch(setFilter({ filter }));
  }
}
