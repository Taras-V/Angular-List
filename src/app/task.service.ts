
import { MessageService } from './message.service';
import { ITask } from './task';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasksUrl = 'api/tasks';  // URL to web api
  constructor(
    private http: HttpClient,
    private MessageService: MessageService,
  ) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.tasksUrl)
      .pipe(
        tap(_ => this.log('fached tasks')),
        catchError(this.handleError<ITask[]>('getTasks', []))
      );
  }

  getTask(id: number): Observable<ITask> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<ITask>(url).pipe(
      tap(_ => this.log(`fetched task id=${id}`)),
      catchError(this.handleError<ITask>(`getHero id=${id}`))
    );
  }

  private log(message: string) {
    this.MessageService.add(`TaskServise: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);

    }
  }

  updateTask(task: ITask): Observable<any> {
    return this.http.put(this.tasksUrl, task, this.httpOptions).pipe(
      tap(_ => this.log(`updated task id=${task.id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.tasksUrl, task, this.httpOptions).pipe(
      tap((newTask: ITask) => this.log(`added task w/ id=${newTask.id}`)),
      catchError(this.handleError<ITask>('addTask'))
    );
  }

  deleteTask(task: ITask | number): Observable<ITask> {
    const id = typeof task === 'number' ? task : task.id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<ITask>(url, this.httpOptions).pipe(
      tap(_ => this.handleError<ITask>('delitaTask'))
    );
  }


  searchTasks(term: string): Observable<ITask[]> {

    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<ITask[]>(`${this.tasksUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found tasks matching "${term}"`) :
        this.log(`no tasks matching "${term}"`)),
      catchError(this.handleError<ITask[]>('searchTasks', []))
    );
  }
}
