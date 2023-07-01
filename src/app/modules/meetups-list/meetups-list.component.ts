import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { IMeetup } from '../meetup/meetup.interface';
import { MeetupsService } from 'src/app/services/meetups.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-meetups-list',
  templateUrl: './meetups-list.component.html',
  styleUrls: ['./meetups-list.component.scss'],
})
export class MeetupsListComponent {
  @Input() meetups: IMeetup[] = [];

  constructor(
    public authService: AuthService,
    private meetupsService: MeetupsService
  ) {}

  handleChangeSubscribtion(meetup: IMeetup) {
    const { user } = this.authService;

    if (user) {
      this.meetupsService.subscribeUserToMeetup(
        meetup,
        user.id,
        this.isSubscribed(meetup)
      );
    }
  }

  isSubscribed(meetup: IMeetup): boolean {
    const { user } = this.authService;
    const { users } = meetup;

    if (user) {
      return users.some((subscribedUser) => subscribedUser.id == user.id);
    }

    return false;
  }

  isOwner(meetup: IMeetup): boolean {
    const { user } = this.authService;
    if (user) {
      return meetup.owner.id == user.id;
    }
    return false;
  }
}
