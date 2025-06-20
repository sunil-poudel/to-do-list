import {TaskData, TaskDb} from './shared';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: "root"})
export class TasksServices{
  private tasks: TaskDb[] = [];
  private httpClient = inject(HttpClient);

  constructor(){
    this.getTaskFromBackend();
  }
  getTaskFromBackend(){
      this.httpClient.get<
      {id:number, title:string, date:string, description:string}[]
    >("http://localhost:8080/apis/tasks").subscribe(
      {
        next: (task)=>{
          this.tasks = task;
          console.log(task);
        }
      }
    );
  }

  postTaskToBackend(task: TaskData){
    this.httpClient.post<TaskData>("http://localhost:8080/apis/tasks", task).subscribe(
      {
        next: (response)=>console.log("added task: ",response)
      }
    );
  }

}
