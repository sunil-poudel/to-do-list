import {Component, Output} from '@angular/core';
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
  displayFlag: boolean = false;

  onClickAdd(){
    this.displayFlag = true;
  }
  getDisplayFlag(displayFlag: boolean){
    this.displayFlag = displayFlag;
  }
}
