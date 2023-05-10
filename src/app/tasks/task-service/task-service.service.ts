import { Injectable } from '@angular/core';
import { Task, TaskForm } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }
  public addTask(task: Task) {
    this.tasks.push(task);
  }
  public updateTask(data: TaskForm) {
    this.tasks = this.tasks.map((task) =>
      task.id === data.id ? ({ ...task, ...data } as Task) : task
    );
  }
  get taskList() {
    return [...this.tasks];
  }
}
