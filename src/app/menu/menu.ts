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
  editDisplayFlag: boolean = false;
  submittedTask!: TaskData;
  protected tasksServices = inject(TasksServices);
  currentIndex?: number;
  currentTask?: {id: number; title: string; date: string; description:string};

  onClickAdd(){
    this.displayFlag = true;
  }

  onClickDelete(){
    this.getCurrentIndex();
    if(this.currentIndex != undefined){
      this.tasksServices.deleteTask(this.currentIndex);
      // console.log("deleted task with id: "+this.currentIndex);
      // console.log("remaining tasks:\n "+ this.tasksServices.getTasks().length);
    }
  }

  onClickEdit(){
    if(this.getCurrentTask()) {
      this.editDisplayFlag = true;
    }
  }

  getCurrentIndex(){
    this.currentIndex = this.tasksServices.getCurrentTask();
  }
  getCurrentTask(){
    this.getCurrentIndex();
    if(this.currentIndex != undefined) {
      this.currentTask = this.tasksServices.getTaskById(this.currentIndex);
    }
    return this.currentTask;
  }


  getDisplayFlag(displayFlag: boolean){
    this.displayFlag = displayFlag;
  }
  getEditDisplayFlag(editDisplayFlag: boolean){
    this.editDisplayFlag = editDisplayFlag;
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
