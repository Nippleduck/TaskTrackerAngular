import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from '../../models/project';
import { mergeMap, catchError, map} from 'rxjs/operators';
import { BaseResponse } from 'src/app/models/response-model/base-response';
import { BaseService } from '../base-service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService {

  constructor(private fb: FormBuilder, protected http: HttpClient) { super(http); }

  formModel = this.fb.group({
    Title: ['', Validators.required],
    Description: [''],
  });
  
  public createProject():Observable<Project>{

    let url = `${this.BASE_URL}/projects/add`;

    let project: Project = {
      id: 0,
      title: this.formModel.value.Title,
      description: this.formModel.value.Description !== null ?
       this.formModel.value.Description : "",
      status: 0
    }

    return this.postRequest<Project>(url, project);
  }

  public getProjects(): Observable<Project[]>{

    let url = `${this.BASE_URL}/projects`;

    return this.getRequest<Project[]>(url);
  }

  public deleteProject(projectId: number): Observable<boolean>{

    let url = `${this.BASE_URL}/project/${projectId}/delete`;

    return this.deleteRequest(url);
  }

  public updateProject(){

  }  
}
