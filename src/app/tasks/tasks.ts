import {afterEveryRender, Component, EventEmitter, inject, Output} from '@angular/core';
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
  @Output() clickedTaskId = new EventEmitter<number>();

  constructor() {
    //note: i did this because i need to subscribe each time.
    //i'll look in depth later.
    // this.tasksServices.getAllTasks().subscribe(
    //   {
    //     next: (task)=>{
    //       this.tasks = task;
    //     }
    //   }
    // );

  }

  onClickTask(id:number){
    this.tasksServices.showTask = true;
    this.clickedTaskId.emit(id);
    // console.log("clicked id: ", this.clickedTaskId);
  }

  getTasksFromBackend(){
    this.tasksServices.getTaskFromBackend().subscribe(
      (response)=>{
        this.tasks = response;
      }
    );
  }
  //
  // getAllTasks(){
  //   this.getTasksFromBackend();
  //   return this.tasks;
  // }




}
