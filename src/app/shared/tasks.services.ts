  import {TaskData, TaskDb} from './shared';
  import {inject, Injectable} from '@angular/core';
  import {HttpClient} from '@angular/common/http';

  @Injectable({providedIn: "root"})
  export class TasksServices{
    // private tasks: TaskDb[] = [];
    private httpClient = inject(HttpClient);
    showTask:boolean = false;

    constructor(){
      // this.getTaskFromBackend();
    }
    getTaskFromBackend(){
        return this.httpClient.get<
        TaskDb[]
      >("http://localhost:8080/apis/tasks"); //obtain observable
    }

    postTaskToBackend(task: TaskData){
      this.httpClient.post<TaskData>("http://localhost:8080/apis/tasks", task);
    }

    // getAllTasks(){
    //   return this.getTaskFromBackend();
    // }

    // getTaskById(id:number, callback:(task?:TaskDb)=>void){
    //   this.getAllTasks().subscribe({
    //     next: (response)=>{
    //       const foundTask = response.find((task)=>task.id === id);
    //       callback(foundTask);
    //       console.log(foundTask);
    //     }
    //   });
    // }
  }
