import {Component, EventEmitter, Output, inject} from '@angular/core';
import {NewTask} from './new-task/new-task';
import {TaskData} from '../shared/shared'
import {TasksServices} from '../shared/tasks.services';

@Component({
  selector: 'app-menu',
  imports: [
    NewTask
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  protected tasksServices = inject(TasksServices);
  displayFlag: boolean = false;
  onClickAdd(){
    this.displayFlag = true;
  }

  getDisplayFlag( displayFlag:boolean){
    this.displayFlag = displayFlag;
  }

  postTaskToBackend(task: TaskData){
    this.tasksServices.postTaskToBackend(task);
  }

}
