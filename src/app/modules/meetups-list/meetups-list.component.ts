import { Component, OnInit } from '@angular/core';

import { meetups } from './temp-data';
import { IMeetup } from '../meetup/meetup.interface';
import { MeetupsService } from 'src/app/services/meetups.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meetups-list',
  templateUrl: './meetups-list.component.html',
  styleUrls: ['./meetups-list.component.scss']
})
export class MeetupsListComponent implements OnInit{
  meetupsSync: IMeetup[] = meetups;

  meetups$!: Observable<IMeetup[]>;

  /* сервис по работе с карточками, сервис auth (нужен пользователь) */
  constructor(private meetupsServ: MeetupsService) {}
  
  ngOnInit(): void {
    this.meetups$ = this.meetupsServ.getMeetups()
  }


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
