import { Pipe, PipeTransform } from '@angular/core';
import { filterType } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {


  transform(todos: Todo[], filter: filterType): Todo[] {

    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);

      case 'pending':
        return todos.filter(todo => !todo.completed);

      default:
        return todos;
    }

  }

}
