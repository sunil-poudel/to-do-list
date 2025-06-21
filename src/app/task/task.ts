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

  // getCurrentTask(){
  //   if(this.currentId!=undefined && this.tasksServices.showTask){
  //     this.tasksServices.getTaskById(this.currentId,
  //       (task)=>{
  //         this.currentTask = task;
  //       });
  //     this.tasksServices.showTask = false;
  //   }
  //   return this.currentTask;
  // }
}
