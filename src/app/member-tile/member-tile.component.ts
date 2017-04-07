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
  editMode: boolean = false;
  currentRoute: string = this.router.url;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setEditMode(value: boolean) {
    this.editMode = value;
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

}
