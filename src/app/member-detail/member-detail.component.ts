import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';

import { Member } from './../member.model';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string = '';
  member: FirebaseObjectObservable<any>;

  constructor(private route: ActivatedRoute, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach(urlParams => {
      this.memberId = urlParams['id'];
    });
    this.member = this.memberService.getMemberById(this.memberId);
  }

}
