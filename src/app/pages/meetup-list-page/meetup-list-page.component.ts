import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IMeetup } from 'src/app/modules/meetup/meetup.interface';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-meetup-list-page',
  templateUrl: './meetup-list-page.component.html',
  styleUrls: ['./meetup-list-page.component.scss']
})
export class MeetupListPageComponent implements OnInit, OnDestroy {
  meetups: IMeetup[];
  private onDestroy$: Subject<void> = new Subject();

  constructor(private meetupsServ: MeetupsService) {
    this.meetups = meetupsServ.meetups;
  }
  
  ngOnInit(): void {
    this.meetupsServ.meetupsSubject$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((meetups) => {
        this.meetups = meetups;
      })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
