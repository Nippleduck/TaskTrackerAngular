import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './authorization/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskTracker';

  constructor(private toastr: ToastrService, private authService: AuthService )
  {}
  
  public isAuthorized(): Boolean{
    return this.authService.isLoggedIn();
  }
}
