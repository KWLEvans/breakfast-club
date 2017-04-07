import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTileComponent } from './member-tile.component';

describe('MemberTileComponent', () => {
  let component: MemberTileComponent;
  let fixture: ComponentFixture<MemberTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
