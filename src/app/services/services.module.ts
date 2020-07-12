import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task-service/task.service';
import { TaskUserService } from './task-user-service/task-user.service';
import { RegistrationService } from './registration-service/registration.service';
import { TimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TimeDurationPipe } from './pipes/time-duration/time-duration.pipe';
import { ValidateTaskExpiryDirective } from './directives/validate-task-expiry.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,    
  ],
  declarations: [
      TaskService,
      TaskUserService,
      RegistrationService,
      TimeAgoPipe,
      TimeDurationPipe,
      ValidateTaskExpiryDirective  
    ],
  exports: [
      TaskService,
      TaskUserService,
      RegistrationService,
      TimeAgoPipe,
      TimeDurationPipe,
      ValidateTaskExpiryDirective
    ]
})
export class ComponentsModule { }