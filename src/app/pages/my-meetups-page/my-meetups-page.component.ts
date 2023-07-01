import { Component } from '@angular/core';
import { Subject, map, takeUntil } from 'rxjs';
import { RoutePathsEnum } from 'src/app/app-routing.module';
import { IMeetup } from 'src/app/modules/meetup/meetup.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-my-meetups-page',
  templateUrl: './my-meetups-page.component.html',
  styleUrls: ['./my-meetups-page.component.scss'],
})
export class MyMeetupsPageComponent {
  routePaths = RoutePathsEnum;
  meetups: IMeetup[];
  private onDestroy$: Subject<void> = new Subject();

  constructor(
    private meetupsServ: MeetupsService,
    private authSerivce: AuthService
  ) {
    this.meetups = meetupsServ.userMeetups;
  }

  ngOnInit(): void {
    this.meetupsServ.meetupsSubject$
      .pipe(
        takeUntil(this.onDestroy$),
        map(meetups => meetups.filter(m => m.owner.id == this.authSerivce.user?.id))
      )
      .subscribe((userMeetups) => {
        this.meetups = userMeetups;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
