import { Component, OnInit } from '@angular/core';

import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { HomeComponent } from './../home/home.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ MemberService ]
})
export class AdminComponent implements OnInit {
  model: Member = new Member("name", "Protein", "bio", "imgUrl", 2);
  addNewMember: boolean = false;

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
  }

  setAddNewMember(value: boolean) {
    this.addNewMember = value;
  }

  newMember() {
    this.model = new Member("name", "Protein", "bio", "imgUrl", 2);
  }

  submitForm(memberToSave) {
    this.memberService.saveMember(memberToSave);
    this.addNewMember = false;
  }

}
