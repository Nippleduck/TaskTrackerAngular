import { Component, OnInit } from '@angular/core';
import { TaskUser } from 'src/app/models/task-user';
import { TaskUserService } from 'src/app/services/task-user-service/task-user.service';

@Component({
  selector: 'app-invitation-dialog',
  templateUrl: './invitation-dialog.component.html',
  styleUrls: ['./invitation-dialog.component.scss']
})
export class InvitationDialogComponent implements OnInit {

  searchedPerson: any;

  users: TaskUser[];

  constructor(private userService: TaskUserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (result: TaskUser[]) => {
        this.users = result;
      }
    )
  }
}
