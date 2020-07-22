import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../../../services/task-service/task.service';
import { ProjectService } from '../../../services/project-service/project.service';
import { TaskUserService } from '../../../services/task-user-service/task-user.service';
import { Task } from 'src/app/models/task';
import { Project } from '../../../models/project';
import { TaskUser } from '../../../models/task-user';
import { map, mergeMap } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManagerViewComponent implements OnInit {

  searchedTask: any;
  searchedProject: any;

  projects: Project[];
  users: TaskUser[];

  currentProject: Project;
  projectTasks: Task[];
  projectUsers: TaskUser[];
  projectManager: TaskUser;

  constructor(private taskService: TaskService,
     private projectService: ProjectService,
     private userService: TaskUserService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      result => {
        this.projects = result;
        if(this.projects.length){
          this.currentProject = this.projects[0];
        }
        console.log(this.projects);
      },
      error => console.log(error)
    );
  }

  getProjects(){
    this.projectService.getProjects().subscribe(
      (result: Project[]) => {
        this.projects = result;
        if(this.projects.length){
          this.currentProject = this.projects[0];
        }
        console.log(this.projects);
      },
      error => console.log(error)
    );
  }

  onProjectSelect(project: Project){
    this.currentProject = project;
    //this.projectTasks = null;
    //this.projectUsers = null;

    //this.getProjectTasks();
    //this.getProjectUsers();
  }

  getProjectTasks(){
    this.taskService.getProjectTasks(this.currentProject.id).subscribe(
      (result: Task[]) => {
        this.projectTasks = result;
      },
      error => console.log(error)
    );
  } 

  getProjectUsers(){
    this.userService.getProjectUsers(this.currentProject.id).subscribe(
      (result: TaskUser[]) => {
        this.projectUsers = result;
      },
      error => console.log(error)
    );
  }

  onTaskCreated($event: Task){
    this.projectTasks.push($event);
  }

  onProjectCreated($event: Project){
    this.projects.push($event);
  }
}
