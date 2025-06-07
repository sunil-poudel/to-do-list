import {Component, Output} from '@angular/core';
import {NewTask} from './new-task/new-task';
import {TaskData} from '../shared/shared'

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

  onClickAdd(){
    this.displayFlag = true;
  }
  getDisplayFlag(displayFlag: boolean){
    this.displayFlag = displayFlag;
  }
  getSubmittedTask(submittedTask: TaskData){
    this.submittedTask = submittedTask;
  }
}
