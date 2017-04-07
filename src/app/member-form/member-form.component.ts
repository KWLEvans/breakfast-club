import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Member } from './../member.model';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
  providers: [ MemberService ]
})
export class MemberFormComponent implements OnInit {
  @Input() memberToEdit: Member;
  @Output() submittedSender = new EventEmitter();
  model: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    if (this.memberToEdit) {
      this.model = this.memberToEdit;
    } else {
      this.model = new Member("name", "Protein", "bio", "imgUrl", 2);
    }
  }

  submitForm(memberObject) {
    if (this.memberToEdit) {
      this.memberService.updateMember(memberObject);
    } else {
      this.memberService.saveMember(memberObject);
    }
    this.submittedSender.emit();
  }
}
