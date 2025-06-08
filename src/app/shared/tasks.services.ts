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

  getTaskById(id:number){
    return this.tasks.find((task)=>task.id === id);
  }

  currentTask?:{id:number, title:string, date:string, description:string};
  setCurrentTask(id:number){
    this.currentTask = this.tasks.find((task)=>task.id === id);
    // console.log("current task set as "+this.currentTask?.title);
  }
  getCurrentTask(){
    return this.currentTask?.id;
  }

  deleteTask(id: number){
    this.tasks = this.tasks.filter((task)=> task.id != id);
  }

  editTask(id: number, taskData: TaskData){
    const task = this.getTaskById(id);
    if(task) {
      task.title = taskData.title;
      task.date = taskData.date;
      task.description = taskData.description;
    }
  }
}
