import {Component, inject} from '@angular/core';
import {TasksServices} from '../shared/tasks.services';
import {TaskDb} from '../shared/shared';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  protected tasksServices = inject(TasksServices);
  protected tasks:TaskDb[] = [];

  constructor() {
    this.tasksServices.getAllTasks().subscribe(
      {
        next: (task)=>{
          this.tasks = task;
        }
      }
    );
  }


}
