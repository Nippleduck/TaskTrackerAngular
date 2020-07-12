import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent implements OnInit {

  @Input() project;

  constructor() { }

  ngOnInit(): void {
  }

}
