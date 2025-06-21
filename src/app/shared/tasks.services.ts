  import {TaskData, TaskDb} from './shared';
  import {inject, Injectable} from '@angular/core';
  import {HttpClient} from '@angular/common/http';

  @Injectable({providedIn: "root"})
  export class TasksServices{
    private tasks: TaskDb[] = [];
    private httpClient = inject(HttpClient);
    showTask:boolean = false;

    constructor(){
      this.getTaskFromBackend();
    }
    getTaskFromBackend(){
        return this.httpClient.get<
        {id:number, title:string, date:string, description:string}[]
      >("http://localhost:8080/apis/tasks"); //obtain observable
    }

    postTaskToBackend(task: TaskData){
      this.httpClient.post<TaskData>("http://localhost:8080/apis/tasks", task).subscribe(
        {
          next: (response)=>console.log("added task: ",response)
        }
      );
      this.getAllTasks().subscribe({
        next: (response) =>this.tasks = response
      });
    }

    getAllTasks(){
      return this.getTaskFromBackend();
    }

    getTaskById(id:number, callback:(task?:TaskDb)=>void){
      this.getAllTasks().subscribe({
        next: (response)=>{
          const foundTask = response.find((task)=>task.id === id);
          callback(foundTask);
          console.log(foundTask);
        }
      });
    }

    getAllTasksFromDb(){
      return this.tasks;
    }

  }
