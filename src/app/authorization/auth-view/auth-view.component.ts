import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
