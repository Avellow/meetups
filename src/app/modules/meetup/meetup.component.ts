import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMeetup } from './meetup.interface';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

// animation
const customAnimation = [
  trigger('grow', [
    transition(':enter', [
      style({ height: 0 }),
      animate(500, style({ height: '*' })),
    ]),
    transition(':leave', [
      animate(500, style({ height: 0 })),
    ]),
  ]),
  trigger('blockInitialAnimation', [
    transition(':enter', [])
  ])
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
  @Input() editable: boolean = false;
  @Input() isUserSubscribed = false;

  @Output() onSubscribeChange = new EventEmitter(); 

  isCollapsed = true;

  constructor() {}

  handleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  get isMeetupFinished(): boolean {
    const now = new Date();
    const meetUpDate = new Date(this.meetup.time);
    return now.getTime() > meetUpDate.getTime();
  }

  handleChangeSubscribtion() {
    this.onSubscribeChange.emit();
  }
}
