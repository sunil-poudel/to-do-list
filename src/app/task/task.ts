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
    console.log(this.currentId);
    if(this.currentId!=undefined){
      this.tasksServices.getTaskById(this.currentId,
        (task)=>{
          this.currentTask = task;
        });
    }
    return this.currentTask;
  }
}
