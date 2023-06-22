import { Component } from '@angular/core';
import { IMeetup } from './meetup.interface';
import { animate, style, transition, trigger } from '@angular/animations';

// - ex
const desc = `
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lectus id ligula faucibus pulvinar. Morbi
    interdum
    est a leo vestibulum, id euismod magna sagittis.Mauris bibendum turpis ex, ac posuere mi vulputate sit amet.
    Vivamus
    consequat dui eleifend, commodo risus id, rhoncus erat.Phasellus eget eros nec arcu egestas imperdiet.Aenean
    commodo
    dolor a nulla eleifend, eu tristique velit maximus.Praesent sollicitudin, quam vel mollis bibendum, dui risus
    euismod
    quam, non viverra mi risus sit amet ante.Vestibulum sagittis posuere arcu, et imperdiet enim facilisis vel.

    Morbi vel tempor nunc.Integer iaculis porttitor eros, non tempus mauris convallis euismod.Duis sit amet porta
    lacus.
    Donec et euismod lectus.Aliquam nec massa vitae nunc aliquam accumsan ac eget dolor.Proin augue augue, vehicula ut
    sodales vel, euismod non enim.Mauris eu purus ipsum.Praesent porta porta sapien vitae blandit.Maecenas a tellus
    et
    velit lobortis congue a in tellus.Fusce ultrices tortor est, sit amet volutpat orci elementum vitae.Aliquam eu
    porttitor lectus, tempus gravida erat.
 `
const meetup = {
  id: 1,
  name: "Angular vs react",
  description: desc,
  location: "Переговорка 4",
  target_audience: "Разработчики, аналитики",
  need_to_know: "Ядренную физику",
  will_happen: "Будем готовить пиццу",
  reason_to_come: "Надо",
  time: "2025-06-13T06:14:13.094Z",
  duration: 90,
  createdBy: 1,
  owner: {
    id: 1,
    email: "pam@dundermifflin.com",
    password: "password",
    fio: "Ivan Ivanov"
  },
  users: [
    {
      id: 1,
      email: "pam@dundermifflin.com",
      password: "password",
      fio: "password"
    }, {
      id: 1,
      email: "pam@dundermifflin.com",
      password: "password",
      fio: "password"
    }, {
      id: 1,
      email: "pam@dundermifflin.com",
      password: "password",
      fio: "password"
    }, {
      id: 1,
      email: "pam@dundermifflin.com",
      password: "password",
      fio: "password"
    }, {
      id: 1,
      email: "pam@dundermifflin.com",
      password: "password",
      fio: "password"
    }
  ]
}
// - ex to del ^

//animation

const closedStyle = {
  display: '-webkit-box',
}

const customAnimation = [
  trigger("grow", [
    // Note the trigger name
    transition(":enter", [
      // :enter is alias to 'void => *'
      style({ height: 0 }),
      animate(500, style({ height: "*" }))
    ]),
    transition(":leave", [
      // :leave is alias to '* => void'
      animate(500, style({ height: 0 }))
    ])
  ])
]
//end animation

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss'],
  animations: customAnimation
})
export class MeetupComponent {
  meetup: IMeetup = meetup;
  isCollapsed = true;

  handleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  get description(): string {
    return this.isCollapsed
      ? this.meetup.description.slice(0, 250) + '...'
      : this.meetup.description;
  }

  get isMeetupFinished() {
    const now = new Date();
    const meetUpDate = new Date(this.meetup.time);
    return now.getTime() > meetUpDate.getTime();
  }

}
