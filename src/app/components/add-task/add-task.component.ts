import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  @Output() onAddTask = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }
 
  onSubmit() {
    if(this.text.trim() === '')
      alert('Please add a task!');
    
    const newTask = {
      'text': this.text,
      'day': this.day,
      'reminder': this.reminder
    };

    this.onAddTask.emit(newTask);

    // After submission, reset fields
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
