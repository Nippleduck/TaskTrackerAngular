import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import { from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
   
    constructor(private router: Router, private authService: AuthService){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : boolean {
        if (!this.authService.isLoggedIn()) //remove "!" when unnecesary
        return true;

        else{
            this.router.navigate(['/user/login']);
            return false;
        }
    }
}