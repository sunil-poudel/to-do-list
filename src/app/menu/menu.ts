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
  displayFlag: boolean = false;
  submittedTask!: TaskData;
  protected tasksServices = inject(TasksServices);
  currentIndex?: number;

  onClickAdd(){
    this.displayFlag = true;
  }

  onClickDelete(){
    this.currentIndex = this.tasksServices.getCurrentTask();
    if(this.currentIndex != undefined){
      this.tasksServices.deleteTask(this.currentIndex);
      console.log("deleted task with id: "+this.currentIndex);
      console.log("remaining tasks:\n "+ this.tasksServices.getTasks().length);
    } else{
      console.log("no task selected to delete!");
    }
  }
  getDisplayFlag(displayFlag: boolean){
    this.displayFlag = displayFlag;
  }
  getSubmittedTask(submittedTask: TaskData){
    this.submittedTask = submittedTask;
    // console.log(submittedTask);
    this.sendSubmittedTaskToApp();
  }

  @Output() submittedTaskToApp = new EventEmitter<TaskData>();
  sendSubmittedTaskToApp(){
    this.submittedTaskToApp.emit(this.submittedTask);
  }
}
