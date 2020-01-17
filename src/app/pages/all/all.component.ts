import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  public todos: any[] = null;

  constructor(
    private service: DataService,
  ) { }

  ngOnInit() {
    this.service.getAllTodos().subscribe((data: any) => this.todos = data);
  }

}
