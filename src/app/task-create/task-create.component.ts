import { Component, OnInit, Output, Input } from '@angular/core';
import { Task } from '../task';
import { LoggerService } from '../logger.service';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  @Input() msg: string;

  // @Output() resolve = new EventEmitter<string>();

  task = new Task(0, '', '', '');

  newTask() {
    this.logger.log("登録したタスク : " + JSON.stringify(this.task));
    this.taskDataService.addTask(this.task)
    .subscribe(result => {
      console.log(result.todo + ' を追加しました');
    });
    // alert("ID : " + this.task.id + " やること : " + this.task.todo + "優先度 : " + this.task.priority);
    // this.resolve.emit(this.task);
  }

  constructor(private logger: LoggerService, private taskDataService: TaskDataService) { }

  ngOnInit() {
  }

}
