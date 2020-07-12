import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { LoginViewComponent } from './auth-view/login-view/login-view.component';
import { RegistrationViewComponent } from './auth-view/registration-view/registration-view.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild(
      [
        {
          path: 'auth', component: AuthViewComponent,
          children: [
            { path: 'registration', component: RegistrationViewComponent},
            { path: 'login', component: LoginViewComponent}
          ]
        }
      ]
    ),
    MatRadioModule    
  ],
  declarations: [
    AuthViewComponent,
    LoginViewComponent,
    RegistrationViewComponent
    ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    AuthViewComponent,
    LoginViewComponent,
    RegistrationViewComponent,
  ]
})
export class AuthorizationModule { }
