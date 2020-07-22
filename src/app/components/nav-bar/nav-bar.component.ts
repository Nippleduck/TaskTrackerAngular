import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { from } from 'rxjs';
import { AuthService } from '../../authorization/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  logout(){
    this.service.logout().subscribe((canLogout: boolean) => {
      if(canLogout === true) this.router.navigateByUrl('/auth/login');
    })
  }
}
