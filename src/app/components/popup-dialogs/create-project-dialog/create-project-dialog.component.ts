import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent implements OnInit {

  constructor(public service: ProjectService, public toastr: ToastrService) { }

  @Output() projectCreated = new EventEmitter<Project>();

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit(){
    let project: Project;

    this.service.createProject().subscribe(
      (result: Project) => {
        if (result !== null && result !== undefined) {
          this.service.formModel.reset();
          project = result;
          this.projectCreated.emit(project);
          this.toastr.success('New project created.', 'Success!');
        } else {
          this.toastr.error('Creation failed.');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
