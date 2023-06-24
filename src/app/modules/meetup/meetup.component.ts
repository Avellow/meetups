import { Component, Input } from '@angular/core';
import { IMeetup } from './meetup.interface';
import { animate, style, transition, trigger } from '@angular/animations';

// animation
const customAnimation = [
  trigger('grow', [
    // Note the trigger name
    transition(':enter', [
      // :enter is alias to 'void => *'
      style({ height: 0 }),
      animate(500, style({ height: '*' })),
    ]),
    transition(':leave', [
      // :leave is alias to '* => void'
      animate(500, style({ height: 0 })),
    ]),
  ]),
];
//end animation

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss'],
  animations: customAnimation,
})
export class MeetupComponent {
  @Input() meetup!: IMeetup;
  
  isCollapsed = true;
  isUserSubscribed = false; // temp

  constructor() {}

  handleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  get isMeetupFinished(): boolean {
    const now = new Date();
    const meetUpDate = new Date(this.meetup.time);
    return now.getTime() > meetUpDate.getTime();
  }

  // РЕАЛИЗОВАТЬ когда напишу сервис пользователя. 
  // где определять в списке или в карточке ??

  handleSubscribe() { // настроить дебаунс ???
    this.isUserSubscribed = !this.isUserSubscribed;
  }
}
