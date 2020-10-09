import { ITask } from './task';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const tasks = [
      { id: 1, taskName: 'Сніданок' },
      { id: 2, taskName: 'Робота 1' },
      { id: 3, taskName: 'Робота 2' },
      { id: 4, taskName: 'Обід' },
      { id: 5, taskName: 'Робота 3' },
      { id: 6, taskName: 'Вечеря' },
      { id: 7, taskName: 'lala' },
    ];
    return { tasks };
  }
  constructor() { }

  genId(tasks: ITask[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
