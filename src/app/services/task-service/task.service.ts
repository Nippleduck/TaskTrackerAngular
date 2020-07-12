import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly BASE_URL = "http://localhost:5001";

  constructor(private http: HttpClient) { }

  createTask(model:Task):Observable<any>
  {
    const url = `${this.BASE_URL}/task`;

    return this.http.post(url, model);
  }

  updateTask(model: Task):Observable<any>
  {
    const url = `${this.BASE_URL}/task/${model.Id}`;

    return this.http.put(url, model);
  }

  updateTaskProgress(model: Task):Observable<any>
  {
    const url = `${this.BASE_URL}/task/${model.Id}/progress`;

    return this.http.put(url, model);
  }

  addPerformer(id: number, performerName: string):Observable<any>
  {
    const url = `${this.BASE_URL}/task/${id}/performers/${performerName}`;

    return this.http.post(url, null);
  }

  getPerformedTasks():Observable<Task[]>
  {
    const url = `${this.BASE_URL}/user/tasks/performed`;

    return this.http.get<Task[]>(url);
  }

  getManagedTasks():Observable<Task[]>
  {
    const url = `${this.BASE_URL}/user/tasks/managed`;

    return this.http.get<Task[]>(url);
  }

  delete(id: number):Observable<any>
  {
    const url = `${this.BASE_URL}/task/${id}`;

    return this.http.delete(url);
  }
}
