import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent implements OnInit {
  public todos: any[] = null;

  constructor(
    private service: DataService,
  ) { }

  ngOnInit() {
    this.service.getTomorrowTodos().subscribe((data: any) => this.todos = data);
  }

}
