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
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;

              default:
              this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
