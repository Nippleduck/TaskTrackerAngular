import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManagerViewComponent implements OnInit {

  searchedTask:any;
  searchedProject:any;
  
  strings:any[] = [
   {title: "Task manager API"},
   {title: "Fitness app on IOS"},
   {title: "IOT for smart house"},
   {title: "Twitter-like mssngr"},
   {title: "Video-conference app"},
   {title: "Cashier service OS"}];
  constructor() { }

  ngOnInit(): void {
  }

}
