import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation-dialog',
  templateUrl: './invitation-dialog.component.html',
  styleUrls: ['./invitation-dialog.component.scss']
})
export class InvitationDialogComponent implements OnInit {

  searchedPerson;

  names: any[] = [
    {name:"Pablo"},
     {name: "Silvia"},
     {name: "Arnold"},
      {name: "Patricia Madrero"},
       {name: "Axcel D`Tolli"},
        {name: "Mike Sanders"},
        {name: "Mike Sanders"},
        {name: "Mike Sanders"},
        {name: "Mike Sanders"},
        {name: "Mike Sanders"},
        {name: "Mike Sanders"},
        {name: "Mike Sanders"},
        {name: "Mike Sanders"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
