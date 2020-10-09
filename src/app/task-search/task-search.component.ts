import { TaskService } from './../task.service';
import { ITask } from './../task';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap, tap
} from 'rxjs/operators';




@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.scss']
})
export class TaskSearchComponent implements OnInit {

  tasks$: Observable<ITask[]>;
  private searchTerms = new Subject<string>();

  constructor(private taskService: TaskService) { }


  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.tasks$ = this.searchTerms.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.taskService.searchTasks(term))
    );
  }

  


}
