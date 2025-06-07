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

}
