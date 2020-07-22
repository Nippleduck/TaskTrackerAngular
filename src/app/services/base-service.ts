import { mergeMap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../models/response-model/base-response';

export class BaseService {
    protected readonly BASE_URL: string = 'http://localhost:5001';

    constructor(protected http: HttpClient){}

    private handleResponse<T>(recievedResponse: Observable<BaseResponse<T>>): Observable<T>{
        return recievedResponse.pipe(mergeMap((response: BaseResponse<T>) => {
          if(response.success === true){
            return of(response.data);
          }else console.log(<any>response);
      }));
    }

    protected getRequest<T>(url: string): Observable<T>{
      return this.http.get<BaseResponse<T>>(url)
      .pipe((response: Observable<BaseResponse<T>>) => {
        return this.handleResponse<T>(response);
      });
    }

    protected postRequest<T>(url: string, entity: any) : Observable<T>{
      const recievedEntity: any = entity;

      return this.http.post<BaseResponse<number>>(url, entity)
      .pipe(mergeMap((response: BaseResponse<number>) => {
        if(response.success === true){
          recievedEntity.id = response.data;
          return of(recievedEntity as T);
        }else console.log(<any>response);
      }))
    }

    protected deleteRequest(url: string): Observable<boolean>{
      return this.http.delete<BaseResponse<string>>(url)
      .pipe(mergeMap((response: BaseResponse<string>) => {
        if(response.success === true){
          return of(true);
        } else {
          console.log(<any>response);
          return of(false);
        }
      }));
    }

    protected updateRequest<T>(url: string, entity: T): Observable<T>{

    }
}