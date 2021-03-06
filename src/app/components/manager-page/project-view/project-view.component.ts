import { Component, OnInit, Input} from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  @Input() project: Project;
  
  constructor() { }

  ngOnInit(): void {
  }

}
