import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { TasksComponent } from '../tasks/tasks.component';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = uiService.onToggle().subscribe((value) => this.showAddTask = value); 
  }

  toggleAddTask = () => {
    this.uiService.toggleAddTask();
  }

  hasRoute(url: string): boolean{
    return this.router.url === url;
  }
}
