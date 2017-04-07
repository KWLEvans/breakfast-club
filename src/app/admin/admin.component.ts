import { Component, OnInit } from '@angular/core';

import { HomeComponent } from './../home/home.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addNewMember: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  setAddNewMember(value: boolean) {
    this.addNewMember = value;
  }
}
