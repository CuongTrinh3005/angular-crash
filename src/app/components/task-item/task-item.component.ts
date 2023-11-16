import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, HeaderComponent, ButtonComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  };

  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleReminder = new EventEmitter();

  faTimes = faTimes;

  onDelete(task: Task) {
    // task component will get task from task-item component which is its child component
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
