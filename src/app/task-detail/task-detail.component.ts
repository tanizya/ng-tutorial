import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  // taskList:Task[] = [
  //   new Task(1, 'アプリのデザイン', 'すぐやる', 'm'),
  //   new Task(2, '実装', 'なるべく早く', 'me'),
  //   new Task(3, 'テスト', '気が向いたら', 'sss'),
  //   new Task(4, 'アプリのデザイン2', 'すぐやる', 'sjk'),
  //   new Task(5, '実装2', 'なるべく早く', 'asdd'),
  //   new Task(6, 'テスト2', '気が向いたら', 'asdf'),
  // ];
  selectTask: Task;

  // ActivatedRouteサービスクラスを受け取る
  constructor(private route: ActivatedRoute, private taskDataService: TaskDataService) { }

  // コンポーネント初期化時に自動的に呼ばれるメソッド
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        this.taskDataService.getTask(id).subscribe((data) => this.selectTask = data);
        // this.selectTask = this.taskList.filter((task)=>task.id === Number(id))[0]
        // console.log(this.selectTask.todo);
      }
    );
  }

}
