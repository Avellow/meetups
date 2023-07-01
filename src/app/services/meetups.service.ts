import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMeetup } from '../modules/meetup/meetup.interface';
import { Subject, retry } from 'rxjs';
import { isArraysEqual } from './helpers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  public meetups: IMeetup[] = [];

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
      .pipe(retry(3))
      .subscribe({
        next: (meetups) => {
          if (!isArraysEqual(this.meetups, meetups)) {
            this.meetups = meetups;
            this.meetupsSubject$.next(meetups);
          }
        },
        error: (e) => console.log(e),
      });
  }

  private startDataUpdate() {
    setInterval(() => {
      this.loadMeetups();
    }, 20000);
  }
}
