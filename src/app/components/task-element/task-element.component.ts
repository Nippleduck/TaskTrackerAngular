import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskElementComponent implements OnInit {

  @Input() task;

  constructor() { }

  ngOnInit(): void {
    
  }
}
