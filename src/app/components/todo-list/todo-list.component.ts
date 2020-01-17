import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: any = null;

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
  }

  markAsDone(todo) {
    const data = { id: todo.id };
    this.service.markAsDone(data).subscribe(res => { todo.done = true });
  }
}
