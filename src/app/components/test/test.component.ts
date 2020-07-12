import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskManagementService } from '../../services/task-management-service/task-management.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  //tasks: Task[];
  tasks = [
  { title: "Think about conception"},
  { title: "Create template"},
  { title: "Create base project"},
  { title: "Add authorization"},
  { title: "Finish server side"},
  { title: "Finsish frontend"},
  { title: "Send for aproval"},
  {title: "Send to production"}
];

    searchText: string;

  constructor(private service: TaskManagementService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  log(){console.log("hello");}

  getTasks()
  {
    this.service.getTasks().subscribe
    (
      (result) => 
      {
        this.tasks = result;
      },
      err =>
      {
        console.log(err);
      }
    );
  }

}
