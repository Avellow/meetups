import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IMeetup } from 'src/app/modules/meetup/meetup.interface';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-meetup-list-page',
  templateUrl: './meetup-list-page.component.html',
  styleUrls: ['./meetup-list-page.component.scss'],
})
export class MeetupListPageComponent implements OnInit, OnDestroy {
  meetups: IMeetup[];
  private _filter: string = '';
  isMeetupsLoading = false;

  private onDestroy$: Subject<void> = new Subject();

  constructor(private meetupsServ: MeetupsService) {
    this.meetups = meetupsServ.meetups;
  }

  ngOnInit(): void {
    this.meetupsServ.meetupsSubject$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((meetups) => {
        this.meetups = meetups;
      });

    this.meetupsServ.isLoadingSubj$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((isLoading) => {
        this._handleLoader(isLoading);
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  handleChangeSearch(value: string) {
    this._filter = value;
  }

  get filteredMeetups() {
    return this.meetups.filter((meetup) => {
      const values = Object.values(meetup);
      return values.some((value) => {
        if (typeof value == 'string') {
          return value
            .toLowerCase()
            .trim()
            .includes(this._filter.toLowerCase().trim());
        }
        return false;
      });
    });
  }

  private _handleLoader(isLoading: boolean): void {
    // таймер ДЛЯ ДЕМОНСТРАЦИИ ЛОАДЕРА!!!
    if (!isLoading) {
      setTimeout(() => (this.isMeetupsLoading = isLoading), 500);
    } else {
      this.isMeetupsLoading = isLoading;
    }
  }
}
