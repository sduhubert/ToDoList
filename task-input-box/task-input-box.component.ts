import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input-box',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-input-box.component.html',
  styleUrl: './task-input-box.component.css'
})

export class TaskInputBoxComponent {
  newTask: string = "";
  tasks: string[] = [];

  addTask() {
    if(!this.newTask.trim())
    {
      alert("The task field may not be empty.");
      this.newTask="";
    }
    else if(this.tasks.length > 20)
    {
      alert("Maximum number of tasks reached (20). Try removing some of the tasks first.");
    }
    else
    {
      this.tasks.push(this.newTask);
      this.newTask="";
    }
  }

  // Adding a task using the enter key.
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  removeTask(taskNumber: number)
  {
    this.tasks.splice(taskNumber, 1);
  } 
}
