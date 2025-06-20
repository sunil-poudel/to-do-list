import {Component, inject, Input} from '@angular/core';
import {TasksServices} from '../shared/tasks.services';
import {TaskDb} from '../shared/shared';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  protected tasksServices = inject(TasksServices);
  @Input() currentId?:number;
  protected currentTask?:TaskDb;

  getCurrentTask(){
    if(this.currentId){
      this.currentTask = this.tasksServices.getTaskById(this.currentId);
    }
    return this.currentTask;
  }
}
