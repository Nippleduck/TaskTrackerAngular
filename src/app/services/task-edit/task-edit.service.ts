import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { TaskManagementService } from '../task-management-service/task-management.service';

@Injectable({
  providedIn: 'root'
})
export class TaskEditService {

  constructor(private service: TaskManagementService) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    status: new FormControl('1'),
    beginDate: new FormControl(''),
    deadline: new FormControl('')
  });

  initializeFormGroup()
  {
    this.form.setValue({
      $key: null,
      title: '',
      description: '',
      status: '1',
      beginDate: '',
      deadline: ''
    });
  }

  addTask(task){}

  updateTask(task){}

  deleteTask($key: string){}

  populateForm(task){}
}
