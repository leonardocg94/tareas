import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskServiceService } from '../task-service/task-service.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css'],
})
export class NewTaskFormComponent {
  taskForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private taskService: TaskServiceService) {}

  public addTaskHandler() {
    const form = this.taskForm.value;
    this.taskService.addTask({
      completed: false,
      id: Math.random().toString(),
      name: form.name!,
      description: form.description!,
    });
    this.taskForm.reset()
  }
}
