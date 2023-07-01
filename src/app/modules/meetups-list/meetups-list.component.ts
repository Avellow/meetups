import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { IMeetup } from '../meetup/meetup.interface';
import { MeetupsService } from 'src/app/services/meetups.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-meetups-list',
  templateUrl: './meetups-list.component.html',
  styleUrls: ['./meetups-list.component.scss']
})
export class MeetupsListComponent  {
  @Input() meetups: IMeetup[] = []
  

  constructor() { }
  

  handleSubscribe(meetup: IMeetup) {
    // подписка на митап
  }

  handleUnsubscribe(meetup: IMeetup) {
    // отписка отписка от митапа
  }

  isSubscribed(meetup: IMeetup): boolean {
    // подписан ли пользователь
    // const userId = this.auth.user.id
    
    // return meetup.users.some(({ id }) => id === userId); 
    return false;
  }

  isOwner(meetup: IMeetup): boolean {
    // владелец ли
    // const userId = this.auth.user.id
    
    // return meetup.owner.id === userId;
    return false;
  }
}
