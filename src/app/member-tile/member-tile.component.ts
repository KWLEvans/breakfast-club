import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Member } from './../member.model';

@Component({
  selector: 'app-member-tile',
  templateUrl: './member-tile.component.html',
  styleUrls: ['./member-tile.component.css']
})
export class MemberTileComponent implements OnInit {
  @Input() member;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

}
