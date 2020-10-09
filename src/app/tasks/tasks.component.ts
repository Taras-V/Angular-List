import { MessageService } from './../message.service';
import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: ITask[];
  selectedTask: ITask;

  constructor(private taskService: TaskService,
    private MessageService: MessageService) { }

  ngOnInit() {
    this.getTasks()
  }

  onSelect(task: ITask): void {
    this.selectedTask = task;
    this.MessageService.add(`TaskComponent: Selected task id=${task.id}`)
    console.log(this.selectedTask = task);

  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) {
      return
    }
    this.taskService.addTask({ taskName: name } as ITask)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  delete(task: ITask): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task).subscribe()
  }
}
