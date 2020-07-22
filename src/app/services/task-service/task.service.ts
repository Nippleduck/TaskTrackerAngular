import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpResponseBase} from "@angular/common/http";
import { Observable, throwError, of } from 'rxjs';
import { catchError, mergeMap, tap} from 'rxjs/operators';
import { BaseService } from '../base-service';
import { BaseResponse } from 'src/app/models/response-model/base-response';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseService{

  constructor(private fb: FormBuilder, protected http: HttpClient) { super(http); }

  formModel = this.fb.group({
    Title: ['', Validators.required],
    Description: [''],
    Deadline: ['', Validators.required]
  });


  createTask(): Observable<Task>{

    let url = this.BASE_URL + '/task/add';

    var task: Task = {
      id: 0,
      title: this.formModel.value.Title,
      description: this.formModel.value.Description !== null ? 
        this.formModel.value.Description : "",
      state: 0,
      beginDate: Date.now().toString(),
      deadline: new Date(this.formModel.value.Deadline).toString()
    }
    
    return this.postRequest<Task>(url, task);

    return this.http.post<BaseResponse<number>>(url, task)
    .pipe(mergeMap((response: BaseResponse<number>) => {
      if(response.success === true){
        task.id = response.data;
        return of(task);
      } else console.log(<any>response);
    }));
  }  

  getProjectTasks(projectId: number): Observable<Task[]>{

    let url = `${this.BASE_URL}/project/${projectId}/tasks`;

    return this.getRequest<Task[]>(url);
  }
}
