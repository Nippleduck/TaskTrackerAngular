import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError, take, switchMap, filter } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthService} from './auth.service';
import { Tokens } from '../models/token-models/tokens';
import { BaseResponse } from '../models/response-model/base-response';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, public authService: AuthService) {}

    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.authService.getJwtToken()) {
          request = this.addToken(request, this.authService.getJwtToken());
        }
    
        return next.handle(request).pipe(catchError(error => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            return this.handle401Error(request, next);
          } else {
            return throwError(error);
          }
        }));
      }
    
      private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }

      private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
          this.isRefreshing = true;
          this.refreshTokenSubject.next(null);
    
          return this.authService.refreshToken().pipe(
            switchMap((response: BaseResponse<Tokens>) => {
              this.isRefreshing = false;
              this.refreshTokenSubject.next(response.data.accessToken.token);
              return next.handle(this.addToken(request, response.data.accessToken.token));
            }));
    
        } else {
          return this.refreshTokenSubject.pipe(
            filter(token => token != null),
            take(1),
            switchMap(jwt => {
              return next.handle(this.addToken(request, jwt));
            }));
        }
      }
    }