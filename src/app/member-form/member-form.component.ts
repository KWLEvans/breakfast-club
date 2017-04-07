import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Member } from './../member.model';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
  providers: [ MemberService ]
})
export class MemberFormComponent implements OnInit {
  @Output() submittedSender = new EventEmitter();
  model: Member = new Member("name", "Protein", "bio", "imgUrl", 2);

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(memberToSave) {
    this.memberService.saveMember(memberToSave);
    this.submittedSender.emit();
  }
}
