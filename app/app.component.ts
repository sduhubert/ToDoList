import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskInputBoxComponent } from '../task-input-box/task-input-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskInputBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}
