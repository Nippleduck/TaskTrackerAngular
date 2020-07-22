import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from '../../../services/registration-service/registration.service';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['../auth-view.component.scss', './registration-view.component.scss']
})
export class RegistrationViewComponent implements OnInit {

  managerRole: string = "Manager";
  performerRole: string = "Performer";
  
  constructor(public service: RegistrationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (success: boolean) => {
        if (success === true) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          this.toastr.error('Registration failed.');
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
