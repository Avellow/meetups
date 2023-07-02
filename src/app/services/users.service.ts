import { Injectable } from '@angular/core';
import { Subject, forkJoin, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isArraysEqual } from './helpers';
import { IUser } from '../modules/users-list/user-item/user.interface';
import { IUserInfo } from './users-service.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users: IUser[] = [];
  public usersSubject$ = new Subject<IUser[]>();
  private _intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(private http: HttpClient) {
    this.loadUsers();
    this._startDataUpdate();
  }

  loadUsers() {
    this.http.get<IUser[]>(`${environment.baseURL}/user`)
    .pipe(
      map(users => users.filter(user =>
        // чтобы случайно не отредактировать этих пользователей
        user.email !== 'ADMIN@mail.ru' && user.email !== 'USER@mail.ru'
      ))
    )
    .subscribe({
      next: (users) => {
        if (!isArraysEqual(this.users, users)) {
          console.log('обновление данных пользователей');
          this.users = users;
          this.usersSubject$.next(users);
        }
      },
      error: (e) => console.log(e),
    });
  }

  private _startDataUpdate() {
    this._intervalId = setInterval(() => {
      this.loadUsers();
    }, environment.usersRefreshTime);
  }

  private _stopDataUpdate() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }

  updateInfo(id: number, newInfo: IUserInfo, role: string) {
    this._stopDataUpdate();

    const userInfo = {
      email: newInfo.email,
      password: newInfo.password,
      fio: newInfo.fio,
    };

    const roles = role == 'admin' ? ['ADMIN', 'USER'] : ['USER'];

    const newRoles = {
      names: roles,
      userId: id,
    };

    const infoResponse$ = this.http.put(
      `${environment.baseURL}/user/${id}`,
      userInfo
    );

    const rolesResponse$ = this.http.post(
      `${environment.baseURL}/user/role`,
      newRoles
    );

    forkJoin([infoResponse$, rolesResponse$])
    .subscribe({
      next: () => {
        this.loadUsers();
      },
      error: (e) => console.log(e),
      complete: () => this._startDataUpdate(),
    });
  }

  deleteUser(id: number) {
    this._stopDataUpdate();

    this.http.delete(`${environment.baseURL}/user/${id}`)
    .subscribe({
      next: () => {
        this.loadUsers();
      },
      error: (e) => console.log(e),
      complete: () => this._startDataUpdate(),
    });
  }

  addNewUser(user: IUserInfo) {
    this._stopDataUpdate();


    this.http
      .post(`${environment.baseURL}/auth/registration`, user)
      .subscribe({
        next: () => {
          this.loadUsers();
        },
        error: (e) => console.log(e),
        complete: () => this._startDataUpdate(),
      })
  }
}
