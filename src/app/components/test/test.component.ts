import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Task } from 'src/app/models/task';

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

  constructor() { }

  ngOnInit(): void {
    
  }

  log(){console.log("hello");}

  date =  new Date(7, 4, 2000);

  test(){
    let date = new Date(12, 11, 14);
    let stringDate = date.toString();
    let convertedDate = new Date(stringDate);

    console.log(convertedDate);
  }

}
