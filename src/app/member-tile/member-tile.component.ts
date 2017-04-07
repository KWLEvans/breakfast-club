import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-tile',
  templateUrl: './member-tile.component.html',
  styleUrls: ['./member-tile.component.css']
})
export class MemberTileComponent implements OnInit {
  @Input() member;
  constructor() { }

  ngOnInit() {
  }

}
