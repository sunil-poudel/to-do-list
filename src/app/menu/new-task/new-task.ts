import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskData} from '../../shared/shared';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  enteredTitle:string='';
  enteredDate:string='';
  enteredDescription:string='';

  @Output() displayFlag = new EventEmitter<boolean>();
  onClickCancel(){
    this.displayFlag.emit(false);
  }

  @Output() submittedTask = new EventEmitter<TaskData>();
  onSubmit(){
    this.submittedTask.emit({
      title: this.enteredTitle,
      date: this.enteredDate,
      description: this.enteredDescription
    });
    this.onClickCancel();
  }


}
