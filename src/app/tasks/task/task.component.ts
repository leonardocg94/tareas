import { Component, Input } from '@angular/core';
import { Task } from '../types';
import { TaskServiceService } from '../task-service/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: Task;

  constructor(private taskService: TaskServiceService) {
    this.task = { id: '', completed: false, description: '', name: '' };
  }

  public updateStatus(event: boolean) {
    console.log({ event });
    this.taskService.updateTask({id: this.task.id, completed: event})
  }
}
