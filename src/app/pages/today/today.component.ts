import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  public todos: any[] = null;

  constructor(
    private service: DataService,
  ) { }

  ngOnInit() {
    this.service.getTodayTodos().subscribe((data: any) => this.todos = data);
  }

}
