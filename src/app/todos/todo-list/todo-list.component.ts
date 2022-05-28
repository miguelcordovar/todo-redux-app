import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterType } from 'src/app/filter/filter.actions';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: filterType = 'all';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos')
      .subscribe(todos => this.todos = todos);

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.currentFilter = state.filter;
    });
  }

}
