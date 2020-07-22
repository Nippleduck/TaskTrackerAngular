import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TaskService } from '../../../services/task-service/task.service';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent implements OnInit {

  constructor(public service: TaskService, private toastr: ToastrService) { }

  @Output() taskCreated = new EventEmitter<Task>();

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit(){
    let task: Task;

    this.service.createTask().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          task = res;
          this.taskCreated.emit(task);
          this.toastr.success('New task created.', 'Success!');
        } else {
          res.errors.forEach((error: any) => {
            this.toastr.error(error.description, 'Creation failed.')
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
