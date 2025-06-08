import {TaskData} from './shared';
import {Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class TasksServices{
  private tasks: {id:number, title:string, date:string, description:string}[] = [];
  private archivedTasks: {id:number, title:string, date:string, description:string}[] = [];

  isArchived:boolean = false;

  setArchived(isArchived:boolean){
    this.isArchived = isArchived;
  }

  flipArchived(){
    this.isArchived = !this.isArchived;
  }

  getArchivedStatus(){
    return this.isArchived;
  }

  id: number = 0;
  addTask(taskData: TaskData){
    this.id++;
    const task = {id:this.id, title:taskData.title, date:taskData.date, description:taskData.description}
    this.tasks.unshift(task);
    // console.log(task);
  }

  getTasks(){
    if(this.isArchived){
      return this.archivedTasks;
    } else {
      return this.tasks;
    }
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
    this.currentTask = undefined;
  }

  editTask(id: number, taskData: TaskData){
    const task = this.getTaskById(id);
    if(task) {
      task.title = taskData.title;
      task.date = taskData.date;
      task.description = taskData.description;
    }
  }

  archiveTask(id: number){
    this.archivedTasks = this.tasks.filter((task)=>task.id==id);
    this.deleteTask(id);
    console.log("archived task of id: "+id);
    this.currentTask = undefined;
  }

  resetCurrentTask(){
    this.currentTask = undefined;
  }
}
