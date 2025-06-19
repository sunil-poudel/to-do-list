import {TaskData, TaskDb} from './shared';
import {Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class TasksServices{
  private tasks: TaskDb[] = [];

  constructor(){

  }

}
