import {Component, inject, Input} from '@angular/core';
import {TasksServices} from '../shared/tasks.services';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  protected tasksServices = inject(TasksServices);
  @Input() currentId!:number;

}
