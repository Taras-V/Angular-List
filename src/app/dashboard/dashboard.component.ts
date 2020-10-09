import { TaskService } from './../task.service';
import { ITask } from './../task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
task: ITask[] =[]

  constructor(private TaskService: TaskService) { }

  ngOnInit() {
    this.getTasks()
  }

  getTasks() : void{
    this.TaskService.getTasks()
      .subscribe(task=> this.task = task.slice(1,5));
  }



}
