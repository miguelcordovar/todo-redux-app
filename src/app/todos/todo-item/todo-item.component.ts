import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  txtInput!: FormControl;
  chkCompletado!: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.chkCompletado = new FormControl(this.todo.completed);

    this.chkCompletado.valueChanges.subscribe(
      value => this.store.dispatch(actions.toggle({id: this.todo.id}))
    );

  }

  edit() {

    this.editing = true;
    this.txtInput.setValue(this.todo.text);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 100);


  }

  endEdit() {
    this.editing = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.text) { return; }

    this.store.dispatch(actions.edit({id: this.todo.id, text: this.txtInput.value}));

  }

  deleteTodo() {
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}));
  }



}
