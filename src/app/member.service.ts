import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from './member.model';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = this.angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  saveMember(member) {
    this.members.push(member);
  }

  getMemberById(memberId) {
    return this.angularFire.database.object('members/' + memberId);
  }

  updateMember(memberObject) {
    let memberToUpdate = this.getMemberById(memberObject.$key);
    memberToUpdate.update({
      name: memberObject.name,
      type: memberObject.type,
      bio: memberObject.bio,
      imgUrl: memberObject.imgUrl,
      calories: memberObject.calories
    });
  }

}
