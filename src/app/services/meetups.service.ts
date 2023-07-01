import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMeetup } from '../modules/meetup/meetup.interface';
import { Observable, Subject, map, retry, switchMap } from 'rxjs';
import { isArraysEqual, sortMeetupsByDate } from './helpers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  public meetups: IMeetup[] = [];
  private _intervalId: ReturnType<typeof setInterval> | null = null;

  public meetupsSubject$ = new Subject<IMeetup[]>();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.loadMeetups();
    this.startDataUpdate();
  }

  get userMeetups(): IMeetup[] {
    if (!this.authService.user) {
      return [];
    }
    const { id } = this.authService.user;
    return this.meetups.filter(({ owner }) => owner.id === id);
  }

  loadMeetups() {
    this.http
      .get<IMeetup[]>(`${environment.baseURL}/meetup`)
      .pipe(
        retry(3),
        map(sortMeetupsByDate)
      )
      .subscribe({
        next: (meetups) => {
          if (!isArraysEqual(this.meetups, meetups)) {
            console.log('не равны')
            this.meetups = meetups;
            this.meetupsSubject$.next(meetups);
          }
        },
        error: (e) => console.log(e),
      });
  }

  private startDataUpdate() {
    this._intervalId = setInterval(() => {
      this.loadMeetups();
    }, environment.meetupsRefreshTime);
  }

  subscribeUserToMeetup(
    meetup: IMeetup,
    idUser: number,
    isAlreadySubscribed: boolean
  ) {
    const { id: idMeetup } = meetup;
    
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }

    let requestObs$: Observable<IMeetup>;
    const body = { idMeetup, idUser };

    if (isAlreadySubscribed) {
      requestObs$ = this.http.delete<IMeetup>(`${environment.baseURL}/meetup`, { body });
    } else {
      requestObs$ = this.http.put<IMeetup>(`${environment.baseURL}/meetup`, body);
    }

    requestObs$
      .pipe(
        map((updatedMeetup) => {
          return this.meetups.map((meetup) => {
            if (meetup.id === updatedMeetup.id) {
              return updatedMeetup;
            }
            return meetup;
          });
        })
      )
      .subscribe({
        next: (meetups) => {
          this.meetups = meetups;
          this.meetupsSubject$.next(meetups);
          this.startDataUpdate();
        },
        error: (e) => console.log(e),
      });
  }
}
