import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { TaskUser } from 'src/app/models/task-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskUserService {

  readonly BASE_URL = "http://localhost:5001";

  constructor(private http: HttpClient) { }

  public getCurrentUser():Observable<TaskUser>
  {
    const url = `${this.BASE_URL}/user/info`;

    return this.http.get<TaskUser>(url);
  }

  public getUser(id: number)
  {
    const url = `${this.BASE_URL}/${id}/info`;

    return this.http.get<TaskUser>(url);
  }

  public updateUser(model:TaskUser):Observable<string>
  {
    const url = `${this.BASE_URL}/user/update`;

    return this.http.put<string>(url, model);
  }

  public getCurrentImage() : Observable<Blob>
  {  
    const url = `${this.BASE_URL}/user/image`;

    return this.http.get(url, {responseType: "blob"});
  }

  public updateCurrentImage(formData: FormData) 
  : Observable<any>
  {
    const url = `${this.BASE_URL}/user/image`;

    return this.http.post(url, formData);
  }
}

