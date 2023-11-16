import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs'
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

const httpOptions = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpClient : HttpClient) { }

  getTasks(): Observable<Task[]> {
    // get the mock data
    // const task = TASKS;
    // return of(TASKS);

    // get data from backend
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    let url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }

  updateTask(task: Task): Observable<Task> {
    let url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<Task>(url, task, {headers: httpOptions});
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, {headers: httpOptions});
  }
}
