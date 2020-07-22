import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { TaskElementComponent } from './task-element/task-element.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectElementComponent } from './project-element/project-element.component';
import { ManagerViewComponent } from './manager-page/manager-view/manager-view.component';
import { TaskViewComponent } from './manager-page/task-view/task-view.component';
import { ProjectViewComponent } from './manager-page/project-view/project-view.component';
import { UserViewComponent } from './manager-page/user-view/user-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InvitationDialogComponent } from './popup-dialogs/invitation-dialog/invitation-dialog.component';
import { CreateProjectDialogComponent } from './popup-dialogs/create-project-dialog/create-project-dialog.component';
import { CreateTaskDialogComponent } from './popup-dialogs/create-task-dialog/create-task-dialog.component';
import { AuthGuard } from '../authorization/auth.guard';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PerformerPageComponent } from './performer-page/performer-page.component';

const taskRoutes: Routes =
[
  {path: 'manager-page', component: ManagerViewComponent, canActivate: [AuthGuard]},
  {path: 'test', component: TestComponent, canActivate: [AuthGuard]}
];

const managerPageComponents =
[
  ManagerViewComponent,
  TaskViewComponent,
  ProjectViewComponent,
  UserViewComponent
];

const dialogs = 
[
  InvitationDialogComponent,
  CreateProjectDialogComponent,
  CreateTaskDialogComponent
];  

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      ...taskRoutes
    ])
  ],
  declarations: [
      TestComponent,
      TaskElementComponent,
      NavBarComponent,
      ProjectElementComponent,
      LoadingSpinnerComponent,
      ...managerPageComponents,
      ...dialogs,
      UserProfileComponent,
      PerformerPageComponent
    ],
  exports: [
      NavBarComponent
  ]
})
export class ComponentsModule { }
