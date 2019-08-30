import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  taskList: Task[] = [
    new Task(1, 'アプリのデザイン', 'すぐやる', 'めも'),
    new Task(2, '実装', 'なるべく早く', 'めも'),
    new Task(3, 'テスト', '気が向いたら', 'memo3'),
    new Task(4, 'アプリのデザイン2', 'すぐやる', 'MEMO4'),
    new Task(5, '実装2', 'なるべく早く', 'メモ5'),
    new Task(6, 'テスト2', '気が向いたら', 'memo6'),
  ];
  selected = 0;

  clickRow(task: Task) {
    // this.selected = task.todo;
    this.selected = task.id;
    this.router.navigateByUrl('/task/' + task.id);
  }

  onColor(taskId: number) {
    if (taskId === this.selected) {
      return 'click';
    } else {
      return 'not_click';
    }
  }

  constructor(public router: Router, private taskDataService: TaskDataService) { }

  ngOnInit() {
    this.taskDataService.getTaskList().subscribe((datas) => this.taskList = datas);
  }

}
