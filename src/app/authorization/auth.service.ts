import { Injectable } from '@angular/core';
import { Observable, empty, of, from, throwError } from 'rxjs';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { mapTo, catchError, tap, mergeMap } from 'rxjs/operators';
import { Tokens } from '../models/token-models/tokens';
import { TaskUser } from '../models/task-user';
import { BaseResponse } from '../models/response-model/base-response';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

    private readonly JWT_TOKEN = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    private readonly BASE_URL = "http://localhost:5001";
    private loggedUser: string;

    constructor(private http: HttpClient){}

    login(user: { username: string, password: string }): Observable<boolean> {
      let url = `${this.BASE_URL}/auth/login`;  
      
      return this.http.post<BaseResponse<Tokens>>(url, user)
          .pipe(tap((response: BaseResponse<Tokens>) =>
           this.doLoginUser(user.username, response.data)),
            mapTo(true),
            catchError(error => {
              throwError(error.error);
              return of(false);
        }));      
      }
      
      logout(): Observable<boolean> {
        let url = `${this.BASE_URL}/auth/logout`;

        let tokens = {
          accessToken: this.getJwtToken(),
          refreshToken: this.getRefreshToken()
        };

        return this.http.post<BaseResponse<string>>(url, tokens)
        .pipe(mergeMap((response: BaseResponse<string>) => {
          if(response.success === true){
            this.doLogoutUser();
            return of(true);
          } else if(response.success === false){
            console.log(response.data);
            return of(false);
          }
        }));
      }

      refreshToken() {
        let url = `${this.BASE_URL}/auth/refreshToken`;

        let tokens = {
          accessToken: this.getJwtToken(),
          refreshToken: this.getRefreshToken()
        };

        return this.http.post<BaseResponse<Tokens>>(url, tokens)
        .pipe(tap((tokens: BaseResponse<Tokens>) => {
          this.storeTokens(tokens.data);
        }));
      }

      isLoggedIn() {
        return !!this.getJwtToken();
      }

      getJwtToken() {
        return localStorage.getItem(this.JWT_TOKEN);
      }

      private doLoginUser(username: string, tokens: Tokens) {
        this.loggedUser = username;
        this.storeTokens(tokens);
      }

      private doLogoutUser() {
        this.loggedUser = null;
        this.removeTokens();
      }

      private getRefreshToken() {
        return localStorage.getItem(this.REFRESH_TOKEN);
      }

      private storeJwtToken(jwt: string) {
        localStorage.setItem(this.JWT_TOKEN, jwt);
      }
    
      private storeTokens(tokens: Tokens) {
        localStorage.setItem(this.JWT_TOKEN, tokens.accessToken.token);
        localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
      }
    
      private removeTokens() {
        localStorage.removeItem(this.JWT_TOKEN);
        localStorage.removeItem(this.REFRESH_TOKEN);
      }
    }