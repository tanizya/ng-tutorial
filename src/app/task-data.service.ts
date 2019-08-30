import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  taskList: Task[] = [
    new Task(1, 'アプリのデザイン！！！', 'すぐやる', 'memo'),
    new Task(2, '実装！！！', 'なるべく早く', 'memo2'),
    new Task(3, 'テスト！！！', '気が向いたら', 'memo3'),
  ];

  getTaskList(): Observable<Task[]> {
    return of(this.taskList);
  }

  getTask(id: string): Observable<Task> {
    const selectTask = this.taskList.filter((task) => task.id === Number(id))[0];
    return of(selectTask);
  }

  addTask(task: Task) {
    const newTask = new Task(this.taskList.length + 1, task.todo, task.priority, task.memo);
    this.taskList.push(newTask);
    return of(newTask);
  }

  constructor() { }
}
