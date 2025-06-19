import {TaskData} from './shared';
import {inject, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: "root"})
export class DummyTasksServices{
  private tasks: {id: number, title:string, date:string, description:string}[] = [];

  private httpClient = inject(HttpClient);


  constructor(){
    this.getTaskFromBackend();
  }

  addTask(taskData: TaskData){
    // this.tasks.unshift(taskData);
    this.postTaskToBackend(taskData);
  }

  editTask(id:number, taskData: TaskData){
    this.putTaskToBackend(id, taskData);
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
    return this.tasks;
  }

  postTaskToBackend(task: TaskData){
    this.httpClient.post<TaskData>("http://localhost:8080/apis/tasks", task).subscribe(
      {
        next: (response)=>console.log("added task: ",response)
      }
    );
  }

  putTaskToBackend(id:number, taskData:TaskData){
    const task = {id:id, title:taskData.title, date: taskData.date, description: taskData.description};
    this.httpClient.put<{id: number, title:string, date:string, description:string}>("http://localhost:8080/apis/tasks", task).subscribe(
      {
          next: (response) => {console.log("updated task: ", response)}
      }
    );
  }

}
