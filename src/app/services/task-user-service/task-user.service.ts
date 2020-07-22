import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { TaskUser } from 'src/app/models/task-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base-service';
import { BaseResponse } from 'src/app/models/response-model/base-response';

@Injectable({
  providedIn: 'root'
})
export class TaskUserService extends BaseService {

  constructor(protected http: HttpClient) { super(http); }

  public getUsers(): Observable<TaskUser[]>{

    let url = `${this.BASE_URL}/users`;

    return this.getRequest<TaskUser[]>(url);
  }

  public getProjectUsers(projectId: number): Observable<TaskUser[]>{
    let url = `${this.BASE_URL}/project/${projectId}/users`;

    return this.getRequest<TaskUser[]>(url);
  }

  public getCurrentUser():Observable<TaskUser>
  {
    const url = `${this.BASE_URL}/user/info`;

    return this.getRequest<TaskUser>(url);
  }

  public getUser(id: number)
  {
    const url = `${this.BASE_URL}/users/${id}/info`;

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

