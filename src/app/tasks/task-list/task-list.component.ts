import { Component, Input } from '@angular/core';
import { TaskServiceService } from '../task-service/task-service.service';
import { Task } from '../types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() completed: boolean;
  constructor(private taskService: TaskServiceService) {
    this.completed = true;
  }

  get tasks() {
    return this.taskService.taskList;
  }
}
