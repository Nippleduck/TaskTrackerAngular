import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { from } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  
  constructor() {}

  ngOnInit(): void {
  }

}
