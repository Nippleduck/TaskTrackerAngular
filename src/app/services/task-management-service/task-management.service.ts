import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  constructor(private http: HttpClient) { }

  readonly BASE_URL = "http://localhost:5001";

  addTask(task : Task) : Observable<any>
  {
    let url = `${this.BASE_URL}/add`;
    let body = task;
    return this.http.post<any>(url, body);
  }

  getTasks() : Observable<any>
  {
    let url : string = `${this.BASE_URL}/tasks`;
    return this.http.get(url);
  }

  getTask(id : string) : Observable<any>
  {
    let url = `${this.BASE_URL}/task`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  startTask(id : string) : Observable<any>
  {
    let url = `${this.BASE_URL}/start`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  pauseTask(id : string) : Observable<any>
  {
    let url = `${this.BASE_URL}/pause`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  closeTask(id : string) : Observable<any>
  {
    let url = `${this.BASE_URL}/close`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  deleteTask(id : string) : Observable<any>
  {
    let url = `${this.BASE_URL}/delete`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  getStats() : Observable<any>
  {
    let url = `${this.BASE_URL}/stats`;
    return this.http.get(url);
  }

  updateTask(taskDetails) : Observable<any>
  {
    let url = `${this.BASE_URL}/update`;
    return this.http.post(url, taskDetails);
  }
}
