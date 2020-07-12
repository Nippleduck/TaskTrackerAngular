import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskEditService } from '../../services/task-edit/task-edit.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTaskComponent>,
    public editService: TaskEditService) {}

  ngOnInit(): void {
  }

  onClear() {
    this.editService.form.reset();
    this.editService.initializeFormGroup();
    //this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.editService.form.valid) {
      if (!this.editService.form.get('$key').value)
        this.editService.addTask(this.editService.form.value);
      else
      this.editService.updateTask(this.editService.form.value);
      this.editService.form.reset();
      this.editService.initializeFormGroup();
      //this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.editService.form.reset();
    this.editService.initializeFormGroup();
    this.dialogRef.close();
  }
  
}
