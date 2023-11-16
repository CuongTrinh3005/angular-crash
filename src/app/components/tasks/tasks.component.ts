import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent, HeaderComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // subscribe act same as then in promise
    this.taskService.getTasks().subscribe((tanksResult) => this.tasks = tanksResult);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id));
  }

  toggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => this.tasks = [task, ...this.tasks]);
  }
}
