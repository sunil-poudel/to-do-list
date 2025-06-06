import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Tasks} from './tasks/tasks';
import {Task} from './task/task';
import {Menu} from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Tasks, Task, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'to-do-list';
}
