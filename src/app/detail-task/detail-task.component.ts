import { TaskService } from './../task.service';
import { ITask } from './../task';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.scss']
})
export class DetailTaskComponent implements OnInit {

  @Input() selectedTask: ITask;

  task: ITask;

  constructor(
    private route: ActivatedRoute,
    private TaskService: TaskService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.TaskService.getTask(id).subscribe(task => {
      this.task = task
      console.log(this.task);

    });
  }

  goBack() {
    this.location.back();

  }

  save(): void {
    this.TaskService.updateTask(this.task)
      .subscribe(() => this.goBack());

  }

}
