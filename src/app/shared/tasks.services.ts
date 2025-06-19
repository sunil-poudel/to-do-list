import {TaskData} from './shared';
import {inject, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: "root"})
export class TasksServices{
  private tasks: {id:number, title:string, date:string, description:string}[] = [];
  private archivedTasks: {id:number, title:string, date:string, description:string}[] = [];
  private taskFromDatabase: {id:number, title:string, date:string, description:string}[] = [];

  private httpClient = inject(HttpClient);


  constructor(){

    //to fetch data from backend right at the start when this component becomes available
    this.httpClient.get<
      {id:number, title:string, date:string, description:string}
    >("http://localhost:8080/apis/tasks").subscribe(
      {
        next: (task)=>{
          this.taskFromDatabase.push(task);
          // console.log(task);
        }
      }
    );
    console.log("tasks from database are: ");
    console.log(this.taskFromDatabase);
    console.log("tasks from database loaded successfully.");
  }


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
  }

  getTasks(){
    if(this.isArchived){
      return this.archivedTasks;
    } else {
      return this.tasks;
    }
  }

  getTaskById(id:number){
    return this.getTasks().find((task)=>task.id === id);
  }
  currentTask?:{id:number, title:string, date:string, description:string};

  setCurrentTask(id:number){
    this.currentTask = this.getTasks().find((task)=>task.id === id);
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

  archiveTask(id: number){
    const taskTemp = this.tasks.find((task)=> task.id === id);
    if(taskTemp) {
      this.archivedTasks.unshift(taskTemp);
      this.deleteTask(id);
    }
  }

  markTaskIncomplete(id: number){
    const taskTemp = this.archivedTasks.find((task)=> task.id === id);
    if(taskTemp){
      this.tasks.push(taskTemp);
      this.tasks = this.tasks.sort((a,b)=>b.id-a.id);
      this.archivedTasks = this.archivedTasks.filter((task)=>task.id != id);
    }
  }

}
