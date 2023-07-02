import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMeetup } from '../modules/meetup/meetup.interface';
import { Observable, Subject, map, retry } from 'rxjs';
import { isArraysEqual, sortMeetupsByDate } from './helpers';
import { AuthService } from './auth.service';
import { IRequestBody } from '../modules/meetup-form/meetup-form.interface';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  public meetups: IMeetup[] = [];
  private _intervalId: ReturnType<typeof setInterval> | null = null;
  public meetupsSubject$ = new Subject<IMeetup[]>();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.loadMeetups();
    this._startDataUpdate();
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
      .pipe(retry(3), map(sortMeetupsByDate))
      .subscribe({
        next: (meetups) => {
          if (!isArraysEqual(this.meetups, meetups)) {
            console.log('обновление данных');
            this.meetups = meetups;
            this.meetupsSubject$.next(meetups);
          }
        },
        error: (e) => console.log(e),
      });
  }

  private _startDataUpdate() {
    this._intervalId = setInterval(() => {
      this.loadMeetups();
    }, environment.meetupsRefreshTime);
  }

  private _stopDataUpdate() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }

  subscribeUserToMeetup(
    meetup: IMeetup,
    idUser: number,
    isAlreadySubscribed: boolean
  ) {
    const { id: idMeetup } = meetup;

    this._stopDataUpdate();

    let requestObs$: Observable<IMeetup>;
    const body = { idMeetup, idUser };

    if (isAlreadySubscribed) {
      requestObs$ = this.http.delete<IMeetup>(`${environment.baseURL}/meetup`, {
        body,
      });
    } else {
      requestObs$ = this.http.put<IMeetup>(
        `${environment.baseURL}/meetup`,
        body
      );
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
        },
        error: (e) => console.log(e),
        complete: () => this._startDataUpdate(),
      });
  }

  getById(id: number): IMeetup | null {
    return this.meetups.find((meetup) => meetup.id == id) || null;
  }

  createMeetup(requestBody: IRequestBody) {
    this._stopDataUpdate();

    this.http
      .post<IMeetup>(`${environment.baseURL}/meetup`, requestBody)
      .subscribe({
        next: () => this.loadMeetups(),
        error: (e) => console.log(e),
        complete: () => this._startDataUpdate(),
      })
  }

  editMeetup(requestBody: IRequestBody, meetupId: number) {
    this._stopDataUpdate();

    this.http
      .put<IMeetup>(`${environment.baseURL}/meetup/${meetupId}`, requestBody)
      .pipe(
        map((updatedMeetup) => {
          return this.meetups.map((meetup) => {
            if (meetup.id === updatedMeetup.id) {
              // c сервера прилетает ответ митапа где нет поля owner
              return { ...meetup, ...updatedMeetup };
            }
            return meetup;
          });
        })
      )
      .subscribe({
        next: (meetups) => {
          this.meetups = meetups;
          this.meetupsSubject$.next(meetups);
        },
        error: (e) => console.log(e),
        complete: () => this._startDataUpdate(),
      });
  }

  deleteMeetup(meetupId: number) {
    this._stopDataUpdate();

    this.http.delete<IMeetup>(`${environment.baseURL}/meetup/${meetupId}`)
    .pipe(
      map((deletedMeetup) => {
        return this.meetups.filter((meetup) => meetup.id !== deletedMeetup.id);
      })
    )
    .subscribe({
      next: (meetups) => {
        this.meetups = meetups;
        this.meetupsSubject$.next(meetups);
      },
      error: (e) => console.log(e),
      complete: () => this._startDataUpdate(),
    });
  }
}
