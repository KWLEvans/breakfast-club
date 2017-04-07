import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { MemberTileComponent } from './../member-tile/member-tile.component';
import { MemberFilterPipe } from './../member-filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  sortType: string = "all";

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  setSortType(type: string) {
    this.sortType = type;
  }

}
