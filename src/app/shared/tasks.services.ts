import {TaskData} from './shared';
import {Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class TasksServices{
  private tasks: {id:number, title:string, date:string, description:string}[] = [];
  id: number = 0;
  addTask(taskData: TaskData){
    this.id++;
    const task = {id:this.id, title:taskData.title, date:taskData.date, description:taskData.description}
    this.tasks.unshift(task);
    // console.log(task);
  }

  getTasks(){
    return this.tasks;
  }
}
