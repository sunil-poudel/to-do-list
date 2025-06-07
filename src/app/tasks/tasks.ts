import {Component, inject} from '@angular/core';
import {TasksServices} from '../shared/tasks.services';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  protected tasksServices = inject(TasksServices);
  allTasks = this.tasksServices.getTasks();

  setCurrentTask(id: number){
    this.tasksServices.setCurrentTask(id);
    // console.log("set current task of id: "+id);
  }

}
