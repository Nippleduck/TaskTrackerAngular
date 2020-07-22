import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['../auth-view.component.scss', './login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  formModel = 
  {
    UserName: '',
    Password: ''
  }

  constructor(private router: Router,
    private toastr: ToastrService,
    public authService: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('JWT_TOKEN') != null)
      this.router.navigateByUrl('');
  }

  onSubmit(form: NgForm) {
    
    this.authService.login(form.value).subscribe(
      success => {
        if(success){
          this.router.navigateByUrl('/manager-page');//change
        }
      },
      error => {
        if(error.status == 400){
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }
      }
    );
   
    /*
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400){
          this.showSpinner = false;
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }
        else
          console.log(err);
      }
    );*/
  }
}
