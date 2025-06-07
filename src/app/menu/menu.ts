import { Component } from '@angular/core';
import {NewTask} from './new-task/new-task';

@Component({
  selector: 'app-menu',
  imports: [
    NewTask
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  addNewTaskFlag: boolean = false;
  onClickAdd(){
    this.addNewTaskFlag=true;
  }
}
