import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMeetup } from '../modules/meetup/meetup.interface';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  constructor(private http: HttpClient) {}

  getMeetups() {
    return this.http.get<IMeetup[]>(`${environment.baseURL}/meetup`)
  }
}
