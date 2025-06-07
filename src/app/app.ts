import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Tasks} from './tasks/tasks';
import {Task} from './task/task';
import {Menu} from './menu/menu';
import {Footer} from './footer/footer';
import {TaskData} from './shared/shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Tasks, Task, Menu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newlyAddedTask!: TaskData;

  getNewlyAddedTask(newlyAddedTask: TaskData){
    this.newlyAddedTask = newlyAddedTask;

    // console.log(this.newlyAddedTask);
  }
}
